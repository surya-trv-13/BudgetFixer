/* eslint-disable react/prop-types */
import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
	header: {
		color: "#2550E0",
		fontWeight: "bolder",
	},
});

const HomeContainer = ({ classes }) => <h1 className={classes.header}>Surya is here</h1>;

export default withStyles(styles, { withTheme: true })(HomeContainer);
