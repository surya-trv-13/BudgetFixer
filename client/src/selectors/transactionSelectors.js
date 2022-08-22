/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { setTransactionData } from "../actions/transactionActions/setTransactionAction";
import { getTransactionDetails } from "../actions/transactionActions/getTransactionAction";

export const useTransactionSelectors = () => {
	const transactionDetails = useSelector(
		(state) => state.getTransactionReducer.transactionData,
		shallowEqual
	);
	const transactionDetailsLoading = useSelector(
		(state) => state.getTransactionReducer.loading,
		shallowEqual
	);

	// dispatcher
	const dispatch = useDispatch();

	const transactionDetailsStart = useCallback(
		(payload, token) => dispatch(getTransactionDetails(payload, token)),
		[dispatch]
	);

	return {
		transactionDetails,
		transactionDetailsLoading,
		transactionDetailsStart,
	};
};
