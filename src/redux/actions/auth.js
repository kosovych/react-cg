import {AUTH_START, AUTH_FAIL, AUTH_LOGOUT, AUTH_SUCCESS, SET_REDIRECT_PATH} from './actionTypes';
import axios from 'axios';

const authStart = (authData) => ({
    type: AUTH_START,
    authData,
});

const authFail = (error) => ({
    type: AUTH_FAIL,
    error,
});

const authSuccess = (data) => ({
    type: AUTH_SUCCESS,
    userId: data.localId,
    token: data.idToken,
});

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
    return {
    type: AUTH_LOGOUT,
}};

const authSetExpire = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn * 1000);
    }
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true,
        };
        const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjt9welhaMWeXTV84XPv6OsRK2fuIzfNc';
        const signInUp = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjt9welhaMWeXTV84XPv6OsRK2fuIzfNc';
        axios
            .post(isSignUp ? signUpUrl : signInUp, authData)
            .then(res => {
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expiresIn', new Date(Date.now() + res.data.expiresIn * 1000));
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data))
                dispatch(authSetExpire(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error.message));
            })
    }
};

export const setRedirectPath = (redirectPath) => {
    return {
        type: SET_REDIRECT_PATH,
        redirectPath: redirectPath,
    }
}

export const authCheckStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const expirationDate = new Date(localStorage.getItem('expiresIn'));
        const expiresIn = (new Date(expirationDate).getTime() - Date.now()) / 1000
        if(!token || expiresIn < 0) {
            return dispatch(logout())
        }
        dispatch(authSuccess({localId: userId, idToken: token}));
        dispatch(authSetExpire(expiresIn));
    }
};
