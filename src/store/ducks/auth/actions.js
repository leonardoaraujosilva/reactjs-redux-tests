export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const loginRequest = (token) => {
    return {
        type: LOGIN_REQUEST,
        token: token.accessToken
    }
}

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST,
        token: null
    };
}