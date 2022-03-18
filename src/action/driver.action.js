import axios from 'axios';
import { apiUrl } from '../values';
import { BookDriver, GetAvailableDriver } from './types';

//  get available driver action
export const getDriver = (params) => async (dispatch) => {
  dispatch({ type: GetAvailableDriver.START });
  await axios
    .get(`${apiUrl}/api/driver/${params}`)
    .then((res) => {
      dispatch({ type: GetAvailableDriver.SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: GetAvailableDriver.FAIL,
        payload: err.response,
      })
    );
};

// updat availability action
export const updateAvailability = (params, driverObj) => (dispatch) => {
  dispatch({ type: GetAvailableDriver.START });
  axios
    .put(`${apiUrl}/api/driver/availability/${params}`, driverObj)
    .then((res) => {
      dispatch({ type: GetAvailableDriver.SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: GetAvailableDriver.FAIL,
        payload: err.response,
      })
    );
};

// toggle booked action
export const updateBooking = (params, isBooked) => (dispatch) => {
  axios
    .post(`${apiUrl}/api/driver/booked/${params}`, isBooked)
    .then((res) => {
      dispatch({ type: BookDriver.SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: BookDriver.FAIL,
        payload: err.response,
      })
    );
};
