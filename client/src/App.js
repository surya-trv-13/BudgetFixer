import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home/index";
import SignUp from "./views/SignUp/index";
import { useAuthSelectors } from "./selectors/authSelectors";

const App = () => {
	const { isTokenRegistered } = useAuthSelectors();

	console.log(localStorage.getItem("authToken"));

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
