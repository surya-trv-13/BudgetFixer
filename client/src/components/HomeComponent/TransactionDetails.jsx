import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Table, TableHead } from "@material-ui/core";
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

const TransactionDetails = ({ classes }) => {
	const { transactionDetails, transactionDetailsLoading } = useTransactionSelectors();

	return (
		<Box className={classes.root}>
			<Table>
				<TableHead></TableHead>
			</Table>
		</Box>
	);
};

TransactionDetails.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetails);
