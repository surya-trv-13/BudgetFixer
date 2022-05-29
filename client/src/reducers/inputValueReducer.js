import { INPUT_VALUE } from "../actions/actionTypes";

const initialValue = {
	data: "",
};

const inputValueReducer = (state = initialValue, action = {}) => {
	switch (action.type) {
		case INPUT_VALUE:
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

export default inputValueReducer;
