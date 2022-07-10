import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import layoutConfig from "../../layout-config/signUpComponentLayoutConfig.json";
import SignUpHeader from "./SignUpHeader";
import SignUpComponent from "./SignUpComponent";
import SignUpFooter from "./SignUpFooter";

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

const SignUpContainer = ({ classes }) => {
	const layoutLoginComponent = layoutConfig[0];
	return (
		<div className={classes.root}>
			<SignUpHeader />
			<SignUpComponent layoutConfig={layoutLoginComponent} />
			<SignUpFooter />
		</div>
	);
};

SignUpContainer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(SignUpContainer);
