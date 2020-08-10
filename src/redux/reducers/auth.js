import {
    AUTH_START,
    AUTH_FAIL,
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from '../actions/actionTypes';

const initState = {
    loading: false,
    error: null,
    token: null,
    userId: null,
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
    console.log('wewe');
    return {
        ...state,
        token: null,
        userId: null,
    }
}

const reduser = (state=initState, action) => {
    switch (action.type) {
        case AUTH_START: return authStart(state, action);
        case AUTH_FAIL: return authFail(state, action);
        case AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_LOGOUT: return authLogout(state);
        default: return state
    }
}

export default reduser;
