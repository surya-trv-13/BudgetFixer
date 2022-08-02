import { IS_MENU_OPEN } from "../../actions/actionTypes";

const initialState = {
	open: false,
	anchorEl: null,
};

const headerMenuReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case IS_MENU_OPEN:
			return {
				open: action?.open,
				anchorEl: action?.anchorEl,
			};
		default:
			return state;
	}
};

export default headerMenuReducer;
