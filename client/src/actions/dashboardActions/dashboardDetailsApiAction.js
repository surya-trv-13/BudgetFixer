import {
	GET_DASHBOARD_API_CALL_START,
	GET_DASHBOARD_API_CALL_SUCCESS,
	GET_DASHBOARD_API_CALL_FAILURE,
} from "../actionTypes";

export const getDashboardAPIStart = (payload, token) => ({
	type: GET_DASHBOARD_API_CALL_START,
	payload,
	token,
});

export const getDashboardAPISuccess = (payload) => ({
	type: GET_DASHBOARD_API_CALL_SUCCESS,
	payload,
});

export const getDashboardAPIFailure = (payload) => ({
	type: GET_DASHBOARD_API_CALL_FAILURE,
	payload,
});
