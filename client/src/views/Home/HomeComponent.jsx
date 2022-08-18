import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LayoutWrapper from "../../components/Wrappers/LayoutWrapper";
import homeComponentGetter from "../../utils/component-getters/homeComponentGetter";
import { useDashboardSelectors } from "../../selectors/dashboardSelectors";

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

const HomeComponent = ({ classes, layoutConfig }) => {
	const { getDashboardDetailsStart } = useDashboardSelectors();
	useEffect(() => {
		const date = new Date();
		const condnObj = {
			month: date.getMonth() + 1,
			year: date.getFullYear(),
		};
		console.log("Hi", condnObj);
		getDashboardDetailsStart(localStorage.getItem("authToken"), condnObj);
	}, []);
	return (
		<Grid container className={classes.box}>
			<LayoutWrapper layoutConfig={layoutConfig} componentGetter={homeComponentGetter} />
		</Grid>
	);
};

HomeComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(HomeComponent);
