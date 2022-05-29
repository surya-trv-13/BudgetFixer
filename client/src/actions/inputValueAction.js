import { INPUT_VALUE } from "./actionTypes";

export const setInputValue = (data) => ({
	type: INPUT_VALUE,
	payload: data,
});
