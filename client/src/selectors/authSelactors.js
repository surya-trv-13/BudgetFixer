/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { setLoginApiStart } from "../actions/authAction/loginApiAction";
import { isTokenRegisteredAction } from "../actions/authAction/tokenRegisterAction";
import { setRegisterCallStart } from "../actions/authAction/registerApiAction";

export const useAuthSelectors = () => {
	const dispatch = useDispatch();
	const isLoginLoading = useSelector((state) => state.loginApiReducer.loading, shallowEqual);
	const loginData = useSelector((state) => state.loginApiReducer.data, shallowEqual);
	const loginErrorData = useSelector((state) => state.loginApiReducer.error, shallowEqual);
	const isTokenRegistered = useSelector(
		(state) => state.tokenRegisterReducer.isTokenRegistered,
		shallowEqual
	);
	const isRegisterLoading = useSelector(
		(state) => state.registerApiReducer.loading,
		shallowEqual
	);
	const registerData = useSelector((state) => state.registerApiReducer.data, shallowEqual);
	const registerError = useSelector((state) => state.registerApiReducer.error, shallowEqual);

	const userLoginStart = useCallback((data) => dispatch(setLoginApiStart(data)), [dispatch]);
	const setTokenRegister = useCallback(
		(data) => dispatch(isTokenRegisteredAction(data)),
		[dispatch]
	);
	const userRegisterStart = useCallback(
		(data) => dispatch(setRegisterCallStart(data)),
		[dispatch]
	);

	return {
		isLoginLoading,
		loginData,
		loginErrorData,
		isTokenRegistered,
		isRegisterLoading,
		registerData,
		registerError,
		userLoginStart,
		setTokenRegister,
		userRegisterStart,
	};
};
