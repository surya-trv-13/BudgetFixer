/* eslint-disable import/prefer-default-export */
import { IS_TOKEN_REGISTERED } from "../actionTypes";

export const isTokenRegisteredAction = (value) => ({
	type: IS_TOKEN_REGISTERED,
	payload: value,
});
