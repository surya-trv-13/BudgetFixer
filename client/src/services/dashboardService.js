import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const setDashboardData = async (token, payload) => {
	config.headers.Authorization = `Bearer ${token}`;
	const dashboardData = await axios.post("/dashboard", payload, config);
	return dashboardData;
};

export const getDashboardData = async (token, payload) => {
	config.headers.Authorization = `Bearer ${token}`;
	config.params = payload;
	const dashboardData = await axios.get("/dashboard", config);
	return dashboardData;
};
