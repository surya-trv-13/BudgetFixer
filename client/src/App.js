import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home/index";
import SignUp from "./views/SignUp/index";

const App = () => {
	localStorage.setItem("authToken", "Surya");
	localStorage.removeItem("authToken");
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={localStorage.getItem("authToken") ? <Home /> : <Login />}
			/>

			<Route exact path="/SignUp" element={<SignUp />} />
			<Route exact path="/Login" element={<Login />} />
		</Routes>
	);
};

export default App;
