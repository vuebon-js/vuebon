"use strict";

/**
 * App Config
**/
const CONFIGS = {
    "env"         : process.env.NODE_ENV,
    "app_url"     : process.env.APP_URL || 'http://localhost:8080',
    "app_secret"  : process.env.APP_SECRET || 'secret',
    "language"    : process.env.APP_LANGUAGE || 'tr',
    "maintenance" : process.env.APP_MAINTENANCE || false
};

export default CONFIGS;
export const { env, app_url, app_secret, language, maintenance } = CONFIGS;


