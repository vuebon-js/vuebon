import {MaintenanceMiddleware}  from "@vuebon/framework/services/middleware/globals/MaintenanceMiddleware";
import {LoaderMiddleware}       from "@vuebon/framework/services/middleware/globals/LoaderMiddleware";
import {PageNotFoundMiddleware} from "@vuebon/framework/services/middleware/globals/PageNotFoundMiddleware";
import {AuthMiddleware}         from '@vuebon/framework/services/auth/middleware/AuthMiddleware';
import {GuestMiddleware}        from '@vuebon/framework/services/auth/middleware/GuestMiddleware';

export const globals = [
    LoaderMiddleware,
    MaintenanceMiddleware,
    PageNotFoundMiddleware,
];

export const routes = {
    "auth" : AuthMiddleware,
    "guest": GuestMiddleware,
}