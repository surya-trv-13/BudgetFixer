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
