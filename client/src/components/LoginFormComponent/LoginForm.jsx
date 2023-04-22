import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useAuthSelectors } from "../../selectors/authSelectors";

const styles = (theme) => ({
	root: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		boxSizing: "border-box",
		padding: `${theme.typography.pxToRem(50)} ${theme.typography.pxToRem(30)}`,
	},
	loginForm: {
		height: "auto",
		width: "inherit",
	},
	textField: {
		"& .MuiFormLabel-root": {
			fontSize: theme.typography.pxToRem(18.75),
		},
		"& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
			transform: `translate(${theme.typography.pxToRem(27)}, -${theme.typography.pxToRem(
				7
			)})`,
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderWidth: theme.typography.pxToRem(2),
		},
	},
	signUpLink: {
		textDecoration: "none",
		color: theme.palette.secondary.main,
	},
	loginButton: {
		padding: `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(16)}`,
		minWidth: theme.typography.pxToRem(64),
		borderRadius: theme.typography.pxToRem(4),
		backgroundColor: theme.palette.primary.main,
		color: "#FFFFFFA6",
		border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.main}`,
		"&:hover": {
			backgroundColor: theme.palette.solidBackground.main,
			color: theme.palette.primary.main,
		},
	},
	header: {
		marginBottom: theme.typography.pxToRem(20),
	},
	signupText: {
		margin: `${theme.typography.pxToRem(7)} 0`,
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const LoginForm = ({ classes }) => {
	const { userLoginStart, loginData, loginErrorData, isLoginLoading, userLogoutInitialState } =
		useAuthSelectors();
	const navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setCredentials({ ...credentials, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		userLoginStart(credentials);
	};

	useEffect(() => {
		if (!isLoginLoading && loginData?.token) {
			localStorage.setItem("authToken", loginData.token);
			userLogoutInitialState(false);
			navigate("/");
		}
		if (!isLoginLoading && loginErrorData) {
			console.log("Error");
		}
	}, [isLoginLoading]);

	return (
		<Box className={classes.root}>
			<Box className={classes.loginForm}>
				<form onSubmit={handleSubmit}>
					<Typography variant="h1" color="primary" className={classes.header}>
						Login to your account
					</Typography>
					<TextField
						label="Email"
						variant="outlined"
						fullWidth
						onChange={handleChange}
						name="email"
						className={classes.textField}
						placeholder="Enter your email address..."
					/>
					<TextField
						label="Password"
						variant="outlined"
						type="password"
						fullWidth
						onChange={handleChange}
						name="password"
						className={classes.textField}
						placeholder="**********"
					/>
					<Typography className={classes.signupText}>
						Don&apos;t have an account?{" "}
						<Link to="/SignUp" className={classes.signUpLink}>
							Sign Up
						</Link>
					</Typography>
					<Button type="submit" variant="contained" className={classes.loginButton}>
						Log In
					</Button>
					<Outlet />
				</form>
			</Box>
		</Box>
	);
};

LoginForm.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginForm);
