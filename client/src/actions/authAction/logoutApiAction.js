import {
	LOGOUT_API_CALL_START,
	LOGOUT_API_CALL_SUCCESS,
	LOGOUT_API_CALL_FAILURE,
	LOGOUT_INITIAL_STATE,
} from "../actionTypes";

export const setLogoutApiStart = (token) => ({
	type: LOGOUT_API_CALL_START,
	payload: token,
});

export const setLogoutApiSuccess = (payload) => ({
	type: LOGOUT_API_CALL_SUCCESS,
	payload,
});

export const setLogoutApiFailure = () => ({
	type: LOGOUT_API_CALL_FAILURE,
});

export const setInitialLogout = (isLogOut) => ({
	type: LOGOUT_INITIAL_STATE,
	payload: isLogOut,
});
