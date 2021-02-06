"use strict";

/*
* Json Web Token Configs
*/
const Configs = {
    routes: {
        home           : process.env.AUTH_HOME_NAME || 'home',
        login          : process.env.AUTH_LOGIN_NAME || 'login',
        password_reset : process.env.AUTH_PASSWORD_RESET_NAME || 'password_reset',
        register       : process.env.AUTH_REGISTER_NAME || 'register'

    },
    storage_key:  process.env.AUTH_STORAGE_KEY || 'vb-auth-storage',
    jwt: {
        grant_type    : process.env.JWT_GRANT_TYPE || "password",
        client_id     : process.env.JWT_CLIENT_ID || 2,
        client_secret : process.env.JWT_CLIENT_SECRET || "",
        scope         : process.env.JWT_SCOPE || "*"
    }
};

export default Configs;
export const { routes, storage_key, jwt } = Configs;
export const { home, login, password_reset, register } = Configs.routes;
export const { grant_type, client_id, client_secret, scope } = Configs.jwt;