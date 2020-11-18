import * as AuthActions from './actions';

const initialState = {
    loggedIn: false,
    email: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AuthActions.LOGIN_REQUEST: 
            return { ...state, email: action.email, loggedIn: action.loggedIn} 
        
        case AuthActions.LOGOUT_REQUEST:
            return initialState;
        
        default: 
            return state;
    }
};

export default reducer;