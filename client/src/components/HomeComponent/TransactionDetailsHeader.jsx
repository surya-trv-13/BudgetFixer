import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@material-ui/core";
import RowFlex from "../utility/RowFlex";

const styles = (theme) => ({
	root: {
		height: "6.5vh",
	},
	transactionHeader: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "inherit",
	},
	rootFlex: {
		height: "6.5vh",
		boxSizing: "border-box",
		padding: `0 ${theme.typography.pxToRem(28)}`,
		justifyContent: "space-between",
		position: "relative",
		flexGrow: 1,
	},
	transactionHeadText: {
		color: "#FFFFFFA6",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const TransactionDetailsHeader = ({ classes }) => {
	const handleTransaction = () => {};
	return (
		<Box className={classes.root}>
			<RowFlex rootClass={classes.rootFlex}>
				<Box className={classes.transactionHeader}>
					<Typography variant="h5" className={classes.transactionHeadText}>
						Transactions
					</Typography>
				</Box>
				<Button onClick={handleTransaction}>Add Transaction</Button>
			</RowFlex>
		</Box>
	);
};

TransactionDetailsHeader.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetailsHeader);
