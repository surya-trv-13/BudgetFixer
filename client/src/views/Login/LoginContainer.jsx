import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import layoutConfig from "../../layout-config/loginComponentLayoutConfig.json";
import LoginHeader from "./LoginHeader";
import LoginComponent from "./LoginComponent";
import LoginFooter from "./LoginFooter";

const styles = (theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		height: "100vh",
		width: "100%",
		boxSizing: "border-box",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const LoginContainer = ({ classes }) => {
	const layoutLoginComponent = layoutConfig[0];
	return (
		<div className={classes.root}>
			<LoginHeader />
			<LoginComponent layoutConfig={layoutLoginComponent} />
			<LoginFooter />
		</div>
	);
};

LoginContainer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginContainer);
