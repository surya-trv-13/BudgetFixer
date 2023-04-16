import {
	SET_TRANSACTION_COLUMN_ORDER,
	SET_TRANSACTION_ROW_SELECTION,
	SET_TRANSACTION_PAGE,
	SET_TRANSACTION_ROWS_PER_PAGE,
	SET_TRANSACTION_TABLE_SELECT_ALL,
} from "../actionTypes";

export const setTransactionColumnOrder = (order, orderBy) => ({
	type: SET_TRANSACTION_COLUMN_ORDER,
	order,
	orderBy,
});

export const setTransactionRowSelection = (rows) => ({
	type: SET_TRANSACTION_ROW_SELECTION,
	rows,
});

export const setTransactionGridPage = (page) => ({
	type: SET_TRANSACTION_PAGE,
	page,
});

export const setTransactionGridRowsPerPage = (rowCount) => ({
	type: SET_TRANSACTION_ROWS_PER_PAGE,
	rowCount,
});

export const setTransactionSelectAll = (payload) => ({
	type: SET_TRANSACTION_TABLE_SELECT_ALL,
	payload,
});
