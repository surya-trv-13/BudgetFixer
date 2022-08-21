import {
	SET_TRANSACTION_ACTION_START,
	SET_TRANSACTION_ACTION_SUCCESS,
	SET_TRANSACTION_ACTION_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	transactionData: {},
};

const setTransactionReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_TRANSACTION_ACTION_START:
			return {
				...initialState,
				loading: true,
			};
		case SET_TRANSACTION_ACTION_SUCCESS:
			return {
				...initialState,
				transactionData: action.payload,
			};
		case SET_TRANSACTION_ACTION_FAILURE:
			return {
				...initialState,
				transactionData: action.payload,
			};
		default:
			return state;
	}
};

export default setTransactionReducer;
