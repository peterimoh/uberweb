//  register
const Register = {
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAIL: 'SIGNUP_FAIL',
};

//login
const Login = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

// get available driver
const GetAvailableDriver = {
  START: 'GET_AVAILABLE_DRIVER_START',
  SUCCESS: 'GET_AVAILABLE_DRIVER_SUCCESS',
  FAIL: 'GET_AVAILABLE_DRIVER_FAIL',
};

// update availability
const UpdateAvailability = {
  START: 'UPDATE_AVAILABILITY_START',
  SUCCESS: 'UPDATE_AVAILABILITY_SUCCESS',
  FAIL: 'UPDATE_AVAILABILITY_FAIL',
};

export { Register, Login, GetAvailableDriver, UpdateAvailability };
