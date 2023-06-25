import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Table, TableBody, TableCell, TableRow, Checkbox } from "@material-ui/core";
import { useTransactionSelectors } from "../../selectors/transactionSelectors";
import TransactionGridHeaders from "./TransactionGridHeaders";
import { useUiSelectors } from "../../selectors/uiSelectors";
import { formatDate } from "../../utils/dateUtils";
import { pxToRem } from "../../utils/theme/theme";

const styles = (theme) => ({
	root: {
		width: "auto",
		height: "80%",
		background: theme.palette.solidBackground.default,
		borderRadius: theme.typography.pxToRem(6),
		overflowX: "auto",
		margin: `0 ${pxToRem(48)}`,
	},
	tableRoot: {
		width: "max-content",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const TransactionDetails = ({ classes }) => {
	const { transactionDetails, transactionDetailsLoading } = useTransactionSelectors();
	const { gridSelectedRows, gridRowCount, currentGridPage, setGridSelections } = useUiSelectors();
	const isSelected = (transactionId) => gridSelectedRows.indexOf(transactionId) !== -1;
	const handleRowClick = (e, transactionId) => {
		const selectedIndex = gridSelectedRows.indexOf(transactionId);
		let selectedRows = [];

		if (selectedIndex === -1) {
			selectedRows = selectedRows.concat(gridSelectedRows, transactionId);
		} else if (selectedIndex === 0) {
			selectedRows = selectedRows.concat(gridSelectedRows.slice(1));
		} else if (selectedIndex === gridSelectedRows.length - 1) {
			selectedRows = selectedRows.concat(gridSelectedRows.slice(0, -1));
		} else {
			selectedRows = selectedRows.concat(
				gridSelectedRows.slice(0, selectedIndex),
				gridSelectedRows.slice(selectedIndex + 1)
			);
		}

		setGridSelections(selectedRows);
	};

	return (
		<Box className={classes.root}>
			<Table className={classes.tableRoot}>
				<TransactionGridHeaders
					rowCount={transactionDetails.length}
					transactionDetails={transactionDetails}
					numSelected={gridSelectedRows.length}
				/>
				<TableBody>
					{!transactionDetailsLoading &&
						transactionDetails &&
						transactionDetails
							.slice(
								currentGridPage * gridRowCount,
								currentGridPage * gridRowCount + gridRowCount
							)
							.map((transaction) => {
								const isTransactionSelected = isSelected(transaction._id);
								return (
									<TableRow
										hover
										onClick={(event) => handleRowClick(event, transaction._id)}
										role="checkbox"
										tabIndex={-1}
										selected={isTransactionSelected}
										key={transaction?._id}
									>
										<TableCell padding="checkbox">
											<Checkbox checked={isTransactionSelected} />
										</TableCell>
										<TableCell component="th" id={transaction._id}>
											{transaction.item}
										</TableCell>
										<TableCell>{transaction?.paymentType}</TableCell>
										<TableCell>{transaction?.amount}</TableCell>
										<TableCell>{transaction?.paymentMode}</TableCell>
										<TableCell>
											{formatDate(transaction?.transactionDate)}
										</TableCell>
										<TableCell>{transaction?.description}</TableCell>
									</TableRow>
								);
							})}
				</TableBody>
			</Table>
		</Box>
	);
};

TransactionDetails.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetails);
