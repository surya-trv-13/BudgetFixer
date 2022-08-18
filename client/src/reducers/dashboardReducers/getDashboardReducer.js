import {
	GET_DASHBOARD_API_CALL_START,
	GET_DASHBOARD_API_CALL_SUCCESS,
	GET_DASHBOARD_API_CALL_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	dashboardData: {},
};

const getDashboardReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GET_DASHBOARD_API_CALL_START:
			return {
				...initialState,
				loading: true,
			};
		case GET_DASHBOARD_API_CALL_SUCCESS:
			return {
				...initialState,
				dashboardData: action.payload,
			};
		case GET_DASHBOARD_API_CALL_FAILURE:
			return {
				...initialState,
				dashboardData: action.payload,
			};
		default:
			return state;
	}
};

export default getDashboardReducer;
