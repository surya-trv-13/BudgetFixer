import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const userLoginApi = async (email, password) => {
	const loginData = await axios.post("/user/login", { email, password }, config);
	return loginData;
};

export const userRegister = async (userData) => {
	const registerData = await axios.post("/user", userData, config);
	return registerData;
};

export const userLogout = async (token) => {
	config.headers.Authorization = `Bearer ${token}`;
	const logOutData = await axios.post("/user/logout", {}, config);
	return logOutData;
};

export const userLogoutAllDevice = async (token) => {
	config.headers.Authorization = `Bearer ${token}`;
	const logOutData = await axios.post("/user/logout", {}, config);
	return logOutData;
};
