/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { setDashboardDetailsApiStart } from "../actions/dashboardActions/dashboardApiAction";
import { getDashboardAPIStart } from "../actions/dashboardActions/dashboardDetailsApiAction";

export const useDashboardSelectors = () => {
	const saveDashboardLoading = useSelector(
		(state) => state.setDashboardReducer.loading,
		shallowEqual
	);
	const saveDashboardData = useSelector(
		(state) => state.setDashboardReducer.dashboardData,
		shallowEqual
	);
	const getDashboardLoading = useSelector(
		(state) => state.getDashboardReducer.loading,
		shallowEqual
	);
	const getDashboardData = useSelector(
		(state) => state.getDashboardReducer.dashboardData,
		shallowEqual
	);
	const dispatch = useDispatch();
	const setDashboardDetailsStart = useCallback(
		(token, dashboardData) => dispatch(setDashboardDetailsApiStart(dashboardData, token)),
		[dispatch]
	);
	const getDashboardDetailsStart = useCallback(
		(token, dashboardData) => dispatch(getDashboardAPIStart(dashboardData, token)),
		[dispatch]
	);

	return {
		saveDashboardLoading,
		saveDashboardData,
		getDashboardLoading,
		getDashboardData,
		setDashboardDetailsStart,
		getDashboardDetailsStart,
	};
};
