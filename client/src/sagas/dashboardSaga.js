import { takeLatest, put, call } from "redux-saga/effects";
import { DASHBOARD_API_CALL_START, GET_DASHBOARD_API_CALL_START } from "../actions/actionTypes";
import {
	setDashboardDetailsApiSuccess,
	setDashboardDetailsApiFailure,
} from "../actions/dashboardActions/dashboardApiAction";
import {
	getDashboardAPISuccess,
	getDashboardAPIFailure,
} from "../actions/dashboardActions/dashboardDetailsApiAction";
import { setDashboardData, getDashboardData } from "../services/dashboardService";

function* handleSetDashboardDetails({ token, payload }) {
	try {
		const dashboardDetails = yield call(setDashboardData, token, payload);
		yield put(setDashboardDetailsApiSuccess(dashboardDetails?.data));
	} catch (error) {
		yield put(setDashboardDetailsApiFailure(error));
	}
}

function* handleGetDashboardDetails({ token, payload }) {
	try {
		const dashboardDetails = yield call(getDashboardData, token, payload);
		yield put(getDashboardAPISuccess(dashboardDetails?.data));
	} catch (error) {
		yield put(getDashboardAPIFailure(error));
	}
}

// watchers
export function* watchSetDashboardDetails() {
	yield takeLatest(DASHBOARD_API_CALL_START, handleSetDashboardDetails);
}

export function* watchGetDashboardDetails() {
	yield takeLatest(GET_DASHBOARD_API_CALL_START, handleGetDashboardDetails);
}
