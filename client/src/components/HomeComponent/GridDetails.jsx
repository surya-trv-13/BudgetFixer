import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		background: theme.palette.solidBackground.main,
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const GridDetails = ({ classes }) => <Box className={classes.root}>GridDetails</Box>;

GridDetails.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(GridDetails);
