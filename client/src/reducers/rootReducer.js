import { combineReducers } from "redux";
import loginApiReducer from "./authReducers/loginApiReducer";
import registerApiReducer from "./authReducers/registerApiReducer";

const rootReducer = combineReducers({
	loginApiReducer,
	registerApiReducer,
});

export default rootReducer;
