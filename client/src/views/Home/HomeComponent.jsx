import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import SummaryDetails from "../../components/HomeComponent/SummaryDetails";

const styles = (theme) => ({
	box: {
		overflowY: "scroll",
		height: "88.65vh",
		"&::-webkit-scrollbar": {
			width: 0,
		},
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const HomeComponent = ({ classes }) => (
	<Grid container className={classes.box}>
		<SummaryDetails />
	</Grid>
);

HomeComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(HomeComponent);
