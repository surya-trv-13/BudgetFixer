/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";

import { setLoginApiStart } from "../actions/authAction/loginApiAction";
import { isTokenRegisteredAction } from "../actions/authAction/tokenRegisterAction";
import { setRegisterCallStart } from "../actions/authAction/registerApiAction";
import { setInitialLogout, setLogoutApiStart } from "../actions/authAction/logoutApiAction";
import { getUserDetailsAPIStart } from "../actions/authAction/userDetailsApiAction";

export const useAuthSelectors = () => {
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
	const isLogoutLoading = useSelector((state) => state.logoutApiReducer.isLoading, shallowEqual);
	const isLogout = useSelector((state) => state.logoutApiReducer.isLogOutValue, shallowEqual);
	const registerData = useSelector((state) => state.registerApiReducer.data, shallowEqual);
	const registerError = useSelector((state) => state.registerApiReducer.error, shallowEqual);
	const isUserDataLoading = useSelector(
		(state) => state.userDetailsAPIReducer.loading,
		shallowEqual
	);
	const userData = useSelector((state) => state.userDetailsAPIReducer.userDetails, shallowEqual);

	const dispatch = useDispatch();
	const userLoginStart = useCallback((data) => dispatch(setLoginApiStart(data)), [dispatch]);
	const setTokenRegister = useCallback(
		(data) => dispatch(isTokenRegisteredAction(data)),
		[dispatch]
	);
	const userRegisterStart = useCallback(
		(data) => dispatch(setRegisterCallStart(data)),
		[dispatch]
	);
	const userLogOutStart = useCallback((token) => dispatch(setLogoutApiStart(token)), [dispatch]);
	const userLogoutInitalState = useCallback(
		(data) => dispatch(setInitialLogout(data)),
		[dispatch]
	);
	const getUserDetailsStart = useCallback(
		(token) => dispatch(getUserDetailsAPIStart(token)),
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
		isLogoutLoading,
		isLogout,
		isUserDataLoading,
		userData,
		userLoginStart,
		setTokenRegister,
		userRegisterStart,
		userLogOutStart,
		userLogoutInitalState,
		getUserDetailsStart,
	};
};
