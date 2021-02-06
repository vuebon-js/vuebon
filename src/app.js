import {App}             from "@vuebon/framework/core/App"
import Vue               from "vue"
import AppComponent      from "@view/App.vue"
import providers         from "./provider";
import config            from "./config";
import {globals, routes} from "./middleware"

App.bootstrap({
    Vue, providers, config, middleware: {
        globals, routes
    }
}).then(app => {
    const vm = new Vue({
        el: '#app',
        render: h => h(AppComponent),
        router: app?.resolve('vue-router'),
        store: app?.resolve('vuex')
    });
});