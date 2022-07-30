import { IS_TOKEN_REGISTERED } from "../../actions/actionTypes";

const initialState = {
	isTokenRegistered: false,
};

const tokenRegisterReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case IS_TOKEN_REGISTERED:
			return {
				isTokenRegistered: action.payload,
			};
		default:
			return state;
	}
};

export default tokenRegisterReducer;
