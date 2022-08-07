import {
	LOGOUT_API_CALL_START,
	LOGOUT_API_CALL_SUCCESS,
	LOGOUT_API_CALL_FAILURE,
	LOGOUT_INITIAL_STATE,
} from "../../actions/actionTypes";

const initialState = {
	isLoading: false,
	isLogOutValue: false,
};

const logoutApiReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOGOUT_API_CALL_START:
			return {
				...initialState,
				isLoading: true,
			};
		case LOGOUT_API_CALL_SUCCESS:
			console.log(action.payload.message === "Logout Successfully!");
			return {
				isLoading: false,
				isLogOutValue: action.payload?.message === "Logout Successfully!",
			};
		case LOGOUT_API_CALL_FAILURE:
			return {
				isLoading: false,
				isLogOutValue: false,
			};
		case LOGOUT_INITIAL_STATE:
			return {
				isLoading: false,
				isLogOutValue: action.payload,
			};
		default:
			return state;
	}
};

export default logoutApiReducer;
