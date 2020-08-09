import {AUTH_START, AUTH_FINISH, AUTH_FAIL, AUTH_SUCCESS} from './actionTypes';
import axios from 'axios';

const authStart = (authData) => ({
    type: AUTH_START,
    authData,
});

const authFail = (error) => ({
    type: AUTH_FAIL,
    error,
})

const authSuccess = (data) => ({
    type: AUTH_SUCCESS,
    userId: data.localId,
    token: data.idToken,
})

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
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail());
            })
    }
};

export default auth;