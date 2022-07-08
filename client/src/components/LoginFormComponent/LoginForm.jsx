import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, TextField, Typography } from "@material-ui/core";

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
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const LoginForm = ({ classes }) => {
	const handleOps = () => {};
	return (
		<Box className={classes.root}>
			<Box className={classes.loginForm}>
				<Typography variant="h1" color="primary">
					Login
				</Typography>
				<TextField label="Username" variant="outlined" fullWidth />
				<TextField label="Password" variant="outlined" type="password" fullWidth />
			</Box>
		</Box>
	);
};

LoginForm.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginForm);
