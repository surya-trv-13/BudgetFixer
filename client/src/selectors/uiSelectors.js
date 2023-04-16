/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { isMenuOpenAction } from "../actions/uiActions/headerMenuAction";
import {
	setTransactionGridPage,
	setTransactionGridRowsPerPage,
	setTransactionRowSelection,
	setTransactionColumnOrder,
} from "../actions/uiActions/transactionGridActions";

export const useUiSelectors = () => {
	const isHeaderMenuOpen = useSelector((state) => state.headerMenuReducer.open, shallowEqual);
	const headerMenuAnchorEl = useSelector(
		(state) => state.headerMenuReducer.anchorEl,
		shallowEqual
	);
	const gridOrder = useSelector((state) => state.transactionReducer.order, shallowEqual);
	const gridOrderDirection = useSelector(
		(state) => state.transactionReducer.orderBy,
		shallowEqual
	);
	const gridSelectedRows = useSelector(
		(state) => state.transactionReducer.selectedRows,
		shallowEqual
	);
	const currentGridPage = useSelector((state) => state.transactionReducer.page, shallowEqual);
	const gridRowCount = useSelector((state) => state.transactionReducer.rowCount, shallowEqual);

	const dispatch = useDispatch();
	const setMenuOpen = useCallback((data) => dispatch(isMenuOpenAction(data)), [dispatch]);
	const setCurrentTransactionGridPage = useCallback(
		(data) => dispatch(setTransactionGridPage(data)),
		[dispatch]
	);
	const setGridRowsPerPage = useCallback(
		(data) => dispatch(setTransactionGridRowsPerPage(data)),
		[dispatch]
	);
	const setGridSelections = useCallback(
		(data) => dispatch(setTransactionRowSelection(data)),
		[dispatch]
	);

	const setGridTransactionColumnOrder = useCallback(
		(data) => dispatch(setTransactionColumnOrder(data)),
		[dispatch]
	);

	return {
		isHeaderMenuOpen,
		headerMenuAnchorEl,
		gridOrder,
		gridOrderDirection,
		gridRowCount,
		currentGridPage,
		gridSelectedRows,
		setMenuOpen,
		setCurrentTransactionGridPage,
		setGridRowsPerPage,
		setGridSelections,
		setGridTransactionColumnOrder,
	};
};
