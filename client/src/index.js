import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme/theme";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
