import {
	LOGIN_API_CALL_START,
	LOGIN_API_CALL_SUCCESS,
	LOGIN_API_CALL_FAILURE,
} from "../actionTypes";

export const setLoginApiStart = (data) => ({
	type: LOGIN_API_CALL_START,
	payload: data,
});

export const setLoginApiSuccess = (data) => ({
	type: LOGIN_API_CALL_SUCCESS,
	payload: data,
});

export const setLoginApiFailure = (data) => ({
	type: LOGIN_API_CALL_FAILURE,
	payload: data,
});
