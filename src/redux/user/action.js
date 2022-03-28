export const AUTH_USER = 'AUTH_USER'

export const setAuth = isAuth => ({
    type: AUTH_USER,
    payload: isAuth
})