import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN_API_CALL_START } from "../actions/actionTypes";
import { setLoginApiSuccess, setLoginApiFailure } from "../actions/authAction/loginApiAction";
import { userLoginApi } from "../services/authService";

// handler
function* handleLoginApi({ payload }) {
	try {
		const data = yield call(userLoginApi, payload.email, payload.password);
		console.log(data?.data);
		yield put(setLoginApiSuccess(data?.data));
	} catch (error) {
		yield put(setLoginApiFailure(error));
	}
}

// watcher
export function* watchLogin() {
	yield takeLatest(LOGIN_API_CALL_START, handleLoginApi);
}
