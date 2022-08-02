/* eslint-disable import/prefer-default-export */
import { IS_MENU_OPEN } from "../actionTypes";

export const isMenuOpenAction = (data) => ({
	type: IS_MENU_OPEN,
	open: data.open,
	payload: data.anchorEl,
});
