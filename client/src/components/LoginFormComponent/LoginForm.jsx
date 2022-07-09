import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@material-ui/core";

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
		height: "inherit",
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
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const LoginForm = ({ classes }) => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const handleChange = (event) => {
		setCredentials({ ...credentials, [event.target.name]: event.target.value });

		console.log(event.target.value);
	};

	return (
		<Box className={classes.root}>
			<Box className={classes.loginForm}>
				<form>
					<Typography variant="h1" color="primary">
						Login
					</Typography>
					<TextField
						label="Username"
						variant="outlined"
						fullWidth
						onChange={handleChange}
						name="username"
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
					<Typography>
						Don&apos;t have an account?{" "}
						<a href="https://www.google.com" className={classes.signUpLink}>
							Sign Up
						</a>
					</Typography>
					<Button type="submit" variant="contained">
						Log In
					</Button>
				</form>
			</Box>
		</Box>
	);
};

LoginForm.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginForm);
