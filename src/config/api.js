"use strict";
/*
* Api - Server Config
 */
const api = {
    "base_url"       : process.env.API_BASE_URL || 'http://localhost:8080',
    "login_path"     : process.env.API_LOGIN_PATH || '/login',
    "auth_user_path" : process.env.API_USER_PATH || '/user',
};
export default api;
export const { base_url, login_path, auth_user_path } = api;