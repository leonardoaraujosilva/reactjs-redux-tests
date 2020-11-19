import * as AuthActions from './actions';

const initialState = {
    token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AuthActions.LOGIN_REQUEST: 
            return { ...state, token: action.token };
        
        case AuthActions.LOGOUT_REQUEST:
            return { ...state, token: action.token };
        
        default: 
            return state;
    }
};

export default reducer;