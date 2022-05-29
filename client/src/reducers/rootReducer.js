import { combineReducers } from "redux";
import inputValueReducer from "./inputValueReducer";

const rootReducer = combineReducers({
	inputValueReducer,
});

export default rootReducer;
