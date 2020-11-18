export const LOGIN_REQUEST = "LOGIN_REQUEST";
export function loginRequest(email, password) {
    return {
        type: LOGIN_REQUEST,
        email, 
        password,
        loggedIn: true
    };
}

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST,
        loggedIn: false
    };
}