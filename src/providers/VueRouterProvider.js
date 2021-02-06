import {createRouter, createWebHistory}  from 'vue-router'
import {config} from "@vuebon/framework/utils/helpers";

export default class VueRouterProvider {
    constructor(App) {
        this.App = App;
    }

    async register() {
        this.App.singleton('vue-router', function () {
            return createRouter({
                history: createWebHistory(),
                routes: []
            });
        });
    }

    async boot(vm) {
        const vueRouter = this.App.resolve('vue-router');

        vm.use(vueRouter);

        await this.#setRoutes(vueRouter);

        vueRouter.push(config('router.home'));
    }

    #setComponentResolver() {
        Route.setComponentResolver(function (path) {
            return () => import(/* webpackChunkName: "[request]" */ `@view/pages${path}.vue`)
        });
    }

    async #setRoutes(vueRouter) {
        window.Route = this.App.resolve('router'); // temporary set in window object

        this.#setComponentResolver();

        await import('../routes');

        Route.get().forEach((route) => {
            vueRouter.addRoute(route);
        });

        delete window.Route;
    }
}