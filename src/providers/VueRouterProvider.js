import Vue        from 'vue'
import VueRouter  from 'vue-router'

export default class VueRouterProvider {
    constructor(App) {
        Vue.use(VueRouter);
        this.App = App;
    }

    async register() {
        this.App.singleton('vue-router', function () {
            return new VueRouter({
                mode: 'history'
            });
        });
    }

    async boot() {
        await this.#windowContainer(async () => {
            this.#setComponentResolver();
            await import('../routes');
            this.#setRoutes(Route.get());
        })
    }

    async #windowContainer(callback) {
        window.Route = this.App.resolve('router'); // temporary set in window object
        await callback();
        delete window.Route;
    }

    #setComponentResolver() {
        Route.setComponentResolver(function (path) {
            return () => import(/* webpackChunkName: "[request]" */ `@view/pages${path}.vue`)
        })
    }

    #setRoutes(routes) {
        this.App.resolve('vue-router').addRoutes(routes);
        this.App.resolve('vue-router').options.routes = routes;
    }
}