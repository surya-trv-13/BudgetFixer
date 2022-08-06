import axios from "axios";

const config = {
	header: {
		"Content-Type": "application/json",
	},
};

export const userLoginApi = async (email, password) => {
	const loginData = axios.post("/user/login", { email, password }, config);
	return loginData;
};

export const userRegister = async (userData) => {
	const registerData = axios.post("/user", userData, config);
	return registerData;
};

export const userLogout = async (token) => {
	config.header.Authorization = `Bearer ${token}`;
	const logOutData = axios.post("/user/logout", {}, config);
	return logOutData;
};

export const userLogoutAllDevice = async (token) => {
	config.header.Authorization = `Bearer ${token}`;
	const logOutData = axios.post("/user/logoutAll", {}, config);
	return logOutData;
};
