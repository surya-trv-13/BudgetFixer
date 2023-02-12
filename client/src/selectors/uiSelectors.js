/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { isMenuOpenAction } from "../actions/uiActions/headerMenuAction";
import {
	setTransactionGridPage,
	setTransactionGridRowsPerPage,
	setTransactionRowSelection,
	setTrasactionColumnOrder,
} from "../actions/uiActions/transactionGridActions";

export const useUiSelectors = () => {
	const isHeaderMenuOpen = useSelector((state) => state.headerMenuReducer.open, shallowEqual);
	const headerMenuAnchorEl = useSelector(
		(state) => state.headerMenuReducer.anchorEl,
		shallowEqual
	);

	const dispatch = useDispatch();
	const setMenuOpen = useCallback((data) => dispatch(isMenuOpenAction(data)), [dispatch]);

	return {
		isHeaderMenuOpen,
		headerMenuAnchorEl,
		setMenuOpen,
	};
};
