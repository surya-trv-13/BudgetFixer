import { all, fork } from "redux-saga/effects";
import * as authSagas from "./authSagas";
import * as dashboardSagas from "./dashboardSaga";

export default function* rootSaga() {
	yield all([...Object.values(authSagas), ...Object.values(dashboardSagas)].map(fork));
}
