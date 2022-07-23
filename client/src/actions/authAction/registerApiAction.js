import {
	REGISTER_API_CALL_START,
	REGISTER_API_CALL_SUCCESS,
	REGISTER_API_CALL_FAILURE,
} from "../actionTypes";

export const setRegisterCallStart = (data) => ({
	type: REGISTER_API_CALL_START,
	payload: data,
});

export const setRegisterCallSuccess = (data) => ({
	type: REGISTER_API_CALL_SUCCESS,
	payload: data,
});

export const setRegisterCallFailure = (data) => ({
	type: REGISTER_API_CALL_FAILURE,
	payload: data,
});
