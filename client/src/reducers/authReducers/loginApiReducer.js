import {
	LOGIN_API_CALL_START,
	LOGIN_API_CALL_SUCCESS,
	LOGIN_API_CALL_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	data: {},
	error: {},
};

const loginApiReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOGIN_API_CALL_START:
			return {
				...initialState,
				loading: true,
			};
		case LOGIN_API_CALL_SUCCESS:
			return {
				...initialState,
				data: action.payload,
			};
		case LOGIN_API_CALL_FAILURE:
			return {
				...initialState,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default loginApiReducer;
