import {
	REGISTER_API_CALL_SUCCESS,
	REGISTER_API_CALL_START,
	REGISTER_API_CALL_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	error: {},
	data: {},
};

const registerApiReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case REGISTER_API_CALL_START:
			return {
				loading: true,
				...initialState,
			};
		case REGISTER_API_CALL_SUCCESS:
			return {
				...initialState,
				data: action.payload,
			};
		case REGISTER_API_CALL_FAILURE:
			return {
				...initialState,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default registerApiReducer;
