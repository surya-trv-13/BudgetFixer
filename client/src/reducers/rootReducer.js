import { combineReducers } from "redux";
import loginApiReducer from "./authReducers/loginApiReducer";
import registerApiReducer from "./authReducers/registerApiReducer";
import tokenRegisterReducer from "./authReducers/tokenRegisterReducer";

const rootReducer = combineReducers({
	loginApiReducer,
	registerApiReducer,
	tokenRegisterReducer,
});

export default rootReducer;
