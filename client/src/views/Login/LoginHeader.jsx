import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Header from "../../components/utility/Header";

const styles = () => ({
	root: {
		height: "7.5vh",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const LoginHeader = ({ classes }) => (
	<Box className={classes.root}>
		<Header title="Budget Fixer" showLogo showTag tagText="Sign In" />
	</Box>
);

LoginHeader.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginHeader);
