import {
	GET_USER_DETAILS_START,
	GET_USER_DETAILS_SUCCESS,
	GET_USER_DETAILS_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	userDetails: {},
};

const userDetailsAPIReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GET_USER_DETAILS_START:
			return {
				loading: true,
				...initialState,
			};
		case GET_USER_DETAILS_SUCCESS:
			return {
				loading: false,
				userDetails: action.payload,
			};
		case GET_USER_DETAILS_FAILURE:
			return {
				loading: false,
				userDetails: action.payload,
			};
		default:
			return state;
	}
};

export default userDetailsAPIReducer;
