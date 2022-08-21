import {
	SET_TRANSACTION_ACTION_START,
	SET_TRANSACTION_ACTION_SUCCESS,
	SET_TRANSACTION_ACTION_FAILURE,
} from "../actionTypes";

export const setTransactionData = (payload, token) => ({
	type: SET_TRANSACTION_ACTION_START,
	payload,
	token,
});

export const setTransactionDataSuccess = (payload) => ({
	type: SET_TRANSACTION_ACTION_SUCCESS,
	payload,
});

export const setTransactionDataFailure = (payload) => ({
	type: SET_TRANSACTION_ACTION_FAILURE,
	payload,
});
