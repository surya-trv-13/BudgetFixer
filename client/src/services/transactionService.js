import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const setTransactionData = async (payload, token) => {
	config.headers.Authorization = `Bearer ${token}`;
	const transaction = await axios.post("/transaction", payload, config);
	return transaction;
};

export const getTransactionDetails = async (payload, token) => {
	config.headers.Authorization = `Bearer ${token}`;
	config.params = payload;
	const transaction = await axios.get("/transaction", config);
	return transaction;
};
