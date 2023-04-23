import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import TransactionDetails from "./TransactionDetails";

const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		background: theme.palette.solidBackground.main,
		borderRadius: theme.typography.pxToRem(6),
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const TransactionDetailsSheet = ({ classes }) => (
	<Box className={classes.root}>
		<TransactionDetails />
	</Box>
);

TransactionDetailsSheet.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetailsSheet);
