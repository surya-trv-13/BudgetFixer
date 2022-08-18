import {
	DASHBOARD_API_CALL_START,
	DASHBOARD_API_CALL_SUCCESS,
	DASHBOARD_API_CALL_FAILURE,
} from "../actionTypes";

export const setDashboardDetailsApiStart = (payload, token) => ({
	type: DASHBOARD_API_CALL_START,
	payload,
	token,
});

export const setDashboardDetailsApiSuccess = (payload) => ({
	type: DASHBOARD_API_CALL_SUCCESS,
	payload,
});

export const setDashboardDetailsApiFailure = (payload) => ({
	type: DASHBOARD_API_CALL_FAILURE,
	payload,
});
