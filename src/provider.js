import LoaderProvider     from "@vuebon/framework/services/loader/LoaderProvider";
import PersistentProvider from "@vuebon/framework/services/persistent/PersistentProvider";
import RouterProvider     from "@vuebon/framework/services/router/RouterProvider";
import AuthProvider       from "@vuebon/framework/services/auth/AuthProvider";
import GateProvider       from "@vuebon/framework/services/gate/GateProvider";
import VueRouterProvider  from "@provider/VueRouterProvider";
import VuexProvider       from "@provider/VuexProvider";
import ExampleProvider    from "@provider/ExampleProvider";


export default [
    LoaderProvider,
    PersistentProvider,
    RouterProvider,
    VueRouterProvider,
    AuthProvider,
    GateProvider,
    VuexProvider,
    ExampleProvider
]