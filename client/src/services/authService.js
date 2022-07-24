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
