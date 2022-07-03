import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LayoutWrapper from "../../components/Wrappers/LayoutWrapper";
import loginComponentGetter from "../../utils/component-getters/loginComponentGetter";

const styles = (theme) => ({
	box: {
		overflowY: "scroll",
		height: "88.65vh",
		"&::-webkit-scrollbar": {
			width: 0,
		},
		boxSizing: "border-box",
		width: "100%",
		padding: theme.typography.pxToRem(8),
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	layoutConfig: PropTypes.object.isRequired,
};

const LoginComponent = ({ classes, layoutConfig }) => (
	<Grid container className={classes.box}>
		<LayoutWrapper layoutConfig={layoutConfig} componentGetter={loginComponentGetter} />
	</Grid>
);

LoginComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginComponent);
