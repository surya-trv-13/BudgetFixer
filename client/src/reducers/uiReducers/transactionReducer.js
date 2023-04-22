import {
	SET_TRANSACTION_COLUMN_ORDER,
	SET_TRANSACTION_ROW_SELECTION,
	SET_TRANSACTION_PAGE,
	SET_TRANSACTION_ROWS_PER_PAGE,
} from "../../actions/actionTypes";

const initialState = {
	order: "asc",
	orderBy: "item",
	selectedRows: [],
	page: 1,
	rowCount: 10,
};

const transactionReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_TRANSACTION_COLUMN_ORDER:
			return {
				...state,
				order: action.order,
				orderBy: action.orderBy,
			};
		case SET_TRANSACTION_PAGE:
			return {
				...state,
				page: action.page,
			};
		case SET_TRANSACTION_ROWS_PER_PAGE:
			return {
				rowCount: action.rowCount,
			};
		case SET_TRANSACTION_ROW_SELECTION:
			return {
				...state,
				selectedRows: action.rows,
			};
		default:
			return state;
	}
};

export default transactionReducer;
