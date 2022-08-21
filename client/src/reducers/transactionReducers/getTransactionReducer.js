import {
	GET_TRANSACTION_ACTION_START,
	GET_TRANSACTION_ACTION_SUCCESS,
	GET_TRANSACTION_ACTION_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
	loading: false,
	transactionData: {},
};

const getTransactionReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GET_TRANSACTION_ACTION_START:
			return {
				...initialState,
				loading: true,
			};
		case GET_TRANSACTION_ACTION_SUCCESS:
			return {
				...initialState,
				transactionData: action.payload,
			};
		case GET_TRANSACTION_ACTION_FAILURE:
			return {
				...initialState,
				transactionData: action.payload,
			};
		default:
			return state;
	}
};

export default getTransactionReducer;
