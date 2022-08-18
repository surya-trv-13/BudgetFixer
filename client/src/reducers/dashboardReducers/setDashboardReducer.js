import {
	DASHBOARD_API_CALL_FAILURE,
	DASHBOARD_API_CALL_START,
	DASHBOARD_API_CALL_SUCCESS,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	dashboardData: {},
};

const setDashboardReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case DASHBOARD_API_CALL_START:
			return {
				...initialState,
				loading: true,
			};
		case DASHBOARD_API_CALL_SUCCESS:
			return {
				...initialState,
				dashboardData: action.payload,
			};
		case DASHBOARD_API_CALL_FAILURE:
			return {
				...initialState,
				dashboardData: action.payload,
			};
		default:
			return state;
	}
};

export default setDashboardReducer;
