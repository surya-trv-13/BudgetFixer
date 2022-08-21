import { takeLatest, put, call } from "redux-saga/effects";
import { SET_TRANSACTION_ACTION_START, GET_TRANSACTION_ACTION_START } from "../actions/actionTypes";
import {
	getTransactionDetailsSuccess,
	getTransactionDetailsFailure,
} from "../actions/transactionActions/getTransactionAction";
import {
	setTransactionDataSuccess,
	setTransactionDataFailure,
} from "../actions/transactionActions/setTransactionAction";
import { getTransactionDetails, setTransactionData } from "../services/transactionService";

function* handleGetTransactionData({ payload, token }) {
	try {
		const transactionData = yield call(getTransactionDetails, payload, token);
		yield put(getTransactionDetailsSuccess(transactionData?.data));
	} catch (error) {
		yield put(getTransactionDetailsFailure(error));
	}
}

function* handleSetTransactionData({ payload, token }) {
	try {
		const transactionData = yield call(setTransactionData, payload, token);
		yield put(setTransactionDataSuccess(transactionData.data));
	} catch (error) {
		yield put(setTransactionDataFailure(error));
	}
}

// watcher
export function* watchGetTransactionDetails() {
	yield takeLatest(GET_TRANSACTION_ACTION_START, handleGetTransactionData);
}

export function* watchSetTransactionData() {
	yield takeLatest(SET_TRANSACTION_ACTION_START, handleSetTransactionData);
}
