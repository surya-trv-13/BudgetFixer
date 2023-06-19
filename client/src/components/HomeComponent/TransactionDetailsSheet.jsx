import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import TransactionDetails from "./TransactionDetails";
import TransactionPagination from "./TransactionPagination";
import { useTransactionSelectors } from "../../selectors/transactionSelectors";

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

const TransactionDetailsSheet = ({ classes }) => {
	const { transactionDetailsLoading, transactionDetails } = useTransactionSelectors();
	return (
		<Box className={classes.root}>
			<TransactionDetails />
			<TransactionPagination
				dataLength={
					!transactionDetailsLoading && transactionDetails && transactionDetails.length
				}
			/>
		</Box>
	);
};

TransactionDetailsSheet.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetailsSheet);
