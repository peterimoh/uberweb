import { Login, Register } from '../action/types';

const initialState = {
  isSuccess: false,
  isAuthenticated: false,
  user: {},
  loading: true,
  msg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Register.SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case Register.SIGNUP_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        loading: false,
      };
    case Register.SIGNUP_FAIL:
      return {
        ...state,
        // msg: action.payload.data,
        loading: false,
      };
    case Login.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case Login.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Login.LOGIN_FAIL:
      return {
        ...state,
        // msg: action.payload.data,
      };

    default:
      return state;
  }
};

export { authReducer };
