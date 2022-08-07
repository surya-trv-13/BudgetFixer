import { takeLatest, put, call } from "redux-saga/effects";
import {
	LOGIN_API_CALL_START,
	REGISTER_API_CALL_START,
	LOGOUT_API_CALL_START,
} from "../actions/actionTypes";
import { setLoginApiSuccess, setLoginApiFailure } from "../actions/authAction/loginApiAction";
import {
	setRegisterCallSuccess,
	setRegisterCallFailure,
} from "../actions/authAction/registerApiAction";
import { setLogoutApiSuccess, setLogoutApiFailure } from "../actions/authAction/logoutApiAction";
import { userLoginApi, userRegister, userLogout } from "../services/authService";

// handler
function* handleLoginApi({ payload }) {
	try {
		const loginData = yield call(userLoginApi, payload.email, payload.password);
		yield put(setLoginApiSuccess(loginData?.data));
	} catch (error) {
		yield put(setLoginApiFailure(error));
	}
}

function* handleRegisterApi({ payload }) {
	try {
		const registerData = yield call(userRegister, payload);
		yield put(setRegisterCallSuccess(registerData?.data));
	} catch (error) {
		yield put(setRegisterCallFailure(error));
	}
}

function* handleLogoutApi({ payload }) {
	try {
		console.log(payload);
		const logoutData = yield call(userLogout, payload);
		yield put(setLogoutApiSuccess(logoutData?.data));
	} catch (error) {
		yield put(setLogoutApiFailure());
	}
}

// watcher
export function* watchLogin() {
	yield takeLatest(LOGIN_API_CALL_START, handleLoginApi);
}

export function* watchRegister() {
	yield takeLatest(REGISTER_API_CALL_START, handleRegisterApi);
}

export function* watchLogout() {
	yield takeLatest(LOGOUT_API_CALL_START, handleLogoutApi);
}
