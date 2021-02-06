const options = {
    fallback: '/errors/404',
    home: '/',
    login: '/login',
    errors: {
        notfound: '/404',
        unauthorize: '/403',
        unauthenticate: '/401'
    },
}

export const {fallback, home, login, errors} = options;
export default options;