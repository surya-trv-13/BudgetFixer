import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home/index";
import SignUp from "./views/SignUp/index";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/SignUp" element={<SignUp />} />
			<Route exact path="/Login" element={<Login />} />
		</Routes>
	);
}

export default App;
