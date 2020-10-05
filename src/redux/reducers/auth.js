import {
    AUTH_START,
    AUTH_FAIL,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    SET_REDIRECT_PATH
} from '../actions/actionTypes';

const initState = {
    loading: false,
    error: null,
    token: null,
    userId: null,
    redirectPath: '/',
};

const authStart = (state) => {
    return {
        ...state,
        loading: true,
        error: null,
    }
};

const authFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error,
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        userId: action.userId,
        token: action.token,
    }
};

const authLogout = (state) => {
    return {
        ...state,
        token: null,
        userId: null,
    }
}

const setRedirectPath = (state, action) => {
    return {
        ...state,
        redirectPath: action.redirectPath,
    }
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case AUTH_START: return authStart(state, action);
        case AUTH_FAIL: return authFail(state, action);
        case AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_LOGOUT: return authLogout(state);
        case SET_REDIRECT_PATH: return setRedirectPath(state, action)
        default: return state
    }
}



export default reducer;
