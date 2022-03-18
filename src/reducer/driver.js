import { GetAvailableDriver } from '../action/types';

const initialState = {
  driver: [],
  loading: false,
  err: '',
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAvailableDriver.START:
      return {
        ...state,
        loading: true,
      };
    case GetAvailableDriver.SUCCESS:
      return {
        ...state,
        loading: false,
        driver: action.payload,
      };
    case GetAvailableDriver.FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export { driverReducer };
