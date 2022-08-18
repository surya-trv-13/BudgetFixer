import {
	GET_USER_DETAILS_START,
	GET_USER_DETAILS_SUCCESS,
	GET_USER_DETAILS_FAILURE,
} from "../actionTypes";

export const getUserDetailsAPIStart = (payload) => ({
	type: GET_USER_DETAILS_START,
	payload,
});

export const getUserDetailsAPISuccess = (payload) => ({
	type: GET_USER_DETAILS_SUCCESS,
	payload,
});

export const getUserDetailsAPIFailure = (payload) => ({
	type: GET_USER_DETAILS_FAILURE,
	payload,
});
