/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import HomeComponent from "./HomeComponent";
import layoutConfig from "../../layout-config/homeComponentLayoutConfig.json";

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

const defaultProps = {};

const HomeContainer = ({ classes }) => {
	const layoutConfigHomeComponent = layoutConfig[0];
	return (
		<Box className={classes.root}>
			<HomeHeader />
			<HomeComponent layoutConfig={layoutConfigHomeComponent} />
			<HomeFooter />
		</Box>
	);
};

HomeContainer.propTypes = propTypes;
HomeContainer.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(HomeContainer);
