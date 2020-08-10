import {AUTH_START, AUTH_FAIL, AUTH_LOGOUT, AUTH_SUCCESS} from './actionTypes';
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

const logout = () => ({
    type: AUTH_LOGOUT,
});

const asyncLogout = (expiresIn) => (
    dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn * 1000);
    }
);

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
                console.log(res.data);
                dispatch(authSuccess(res.data))
                dispatch(asyncLogout(res.data.expiresIn));
            })
            .catch(err => {
                console.dir(err);
                dispatch(authFail(err.response.data.error.message));
            })
    }
};

export default auth;
