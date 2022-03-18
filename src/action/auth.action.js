import axios from 'axios';

import { apiUrl } from '../values';
import { Login, Register } from './types';

//  registration action
export const register = (userObj) => (dispatch) => {
  console.log(userObj);
  dispatch({ type: Register.SIGNUP_START });
  axios
    .post(`${apiUrl}/api/register`, userObj)
    .then((res) => {
      dispatch({ type: Register.SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: Register.SIGNUP_FAIL,
        payload: err.response,
      })
    );
};

// login action
export const login = (userObj) => (dispatch) => {
  dispatch({ type: Login.LOGIN_START });
  axios
    .post(`${apiUrl}/api/login`, userObj)
    .then((res) => {
      dispatch({ type: Login.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: Login.LOGIN_FAIL,
        payload: err.response,
      });
    });
};
