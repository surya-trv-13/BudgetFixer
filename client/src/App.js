import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home/index";
import SignUp from "./views/SignUp/index";

const App = () => {
	console.log(localStorage.getItem("authToken"));
	const [authToken, setAuthToken] = useState("");

	useEffect(() => {
		if (localStorage.getItem("authToken")) {
			setAuthToken(localStorage.getItem("authToken"));
		}
	}, [localStorage]);

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={localStorage.getItem("authToken") ? <Home /> : <Navigate to="/Login" />}
			/>
			<Route exact path="/SignUp" element={<SignUp />} />
			<Route exact path="/Login" element={<Login />} />
		</Routes>
	);
};

export default App;
