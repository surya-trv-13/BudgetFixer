import {
	GET_TRANSACTION_ACTION_START,
	GET_TRANSACTION_ACTION_SUCCESS,
	GET_TRANSACTION_ACTION_FAILURE,
} from "../actionTypes";

export const getTransactionDetails = (payload, token) => ({
	type: GET_TRANSACTION_ACTION_START,
	payload,
	token,
});

export const getTransactionDetailsSuccess = (payload) => ({
	type: GET_TRANSACTION_ACTION_SUCCESS,
	payload,
});

export const getTransactionDetailsFailure = (payload) => ({
	type: GET_TRANSACTION_ACTION_FAILURE,
	payload,
});
