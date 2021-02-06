import {App}             from "@vuebon/framework/core/App"
import {createApp}       from "vue"
import AppComponent      from "@view/App.vue"
import providers         from "./provider";
import config            from "./config";
import {globals, routes} from "./middleware"

const vm = createApp(AppComponent);
const middleware = { globals, routes }

App.bootstrap({ vm, providers, config, middleware }).then(app => {
    vm.mount('#app')
});