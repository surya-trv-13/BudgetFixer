import { combineReducers } from "redux";
import loginApiReducer from "./authReducers/loginApiReducer";
import registerApiReducer from "./authReducers/registerApiReducer";
import tokenRegisterReducer from "./authReducers/tokenRegisterReducer";
import headerMenuReducer from "./uiReducers/headerMenuReducer";
import logoutApiReducer from "./authReducers/logoutApiReducer";
import userDetailsAPIReducer from "./authReducers/userDetailsAPIReducer";
import getDashboardReducer from "./dashboardReducers/getDashboardReducer";
import setDashboardReducer from "./dashboardReducers/setDashboardReducer";

const rootReducer = combineReducers({
	loginApiReducer,
	registerApiReducer,
	tokenRegisterReducer,
	headerMenuReducer,
	logoutApiReducer,
	userDetailsAPIReducer,
	getDashboardReducer,
	setDashboardReducer,
});

export default rootReducer;
