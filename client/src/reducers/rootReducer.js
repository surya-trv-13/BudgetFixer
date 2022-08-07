import { combineReducers } from "redux";
import loginApiReducer from "./authReducers/loginApiReducer";
import registerApiReducer from "./authReducers/registerApiReducer";
import tokenRegisterReducer from "./authReducers/tokenRegisterReducer";
import headerMenuReducer from "./uiReducers/headerMenuReducer";
import logoutApiReducer from "./authReducers/logoutApiReducer";

const rootReducer = combineReducers({
	loginApiReducer,
	registerApiReducer,
	tokenRegisterReducer,
	headerMenuReducer,
	logoutApiReducer,
});

export default rootReducer;
