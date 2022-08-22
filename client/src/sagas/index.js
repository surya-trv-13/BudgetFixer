import { all, fork } from "redux-saga/effects";
import * as authSagas from "./authSagas";
import * as dashboardSagas from "./dashboardSaga";
import * as transactionSagas from "./transactionSaga";

export default function* rootSaga() {
	yield all(
		[
			...Object.values(authSagas),
			...Object.values(dashboardSagas),
			...Object.values(transactionSagas),
		].map(fork)
	);
}
