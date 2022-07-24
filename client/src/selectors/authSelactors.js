/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { setLoginApiStart } from "../actions/authAction/loginApiAction";

export const useAuthSelectors = () => {
	const dispatch = useDispatch();
	const isLoginLoading = useSelector((state) => state.loginApiReducer.loading, shallowEqual);
	const loginData = useSelector((state) => state.loginApiReducer.data, shallowEqual);
	const loginErrorData = useSelector((state) => state.loginApiReducer.error, shallowEqual);

	const userLoginStart = useCallback((data) => dispatch(setLoginApiStart(data)), [dispatch]);

	return {
		isLoginLoading,
		loginData,
		loginErrorData,
		userLoginStart,
	};
};
