import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Table, TableBody, TableCell, TableRow, Checkbox } from "@material-ui/core";
import { useTransactionSelectors } from "../../selectors/transactionSelectors";
import TransactionGridHeaders from "./TransactionGridHeaders";
import { useUiSelectors } from "../../selectors/uiSelectors";

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
	const { setGridSelections, gridSelectedRows } = useUiSelectors();
	const [page, setPage] = useState(0);
	const [rowPerPage, setRowPerPage] = useState(10);

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
			<Table>
				<TransactionGridHeaders
					rowCount={transactionDetails.length}
					transactionDetails={transactionDetails}
					numSelected={gridSelectedRows.length}
				/>
				<TableBody>
					{!transactionDetailsLoading &&
						transactionDetails &&
						transactionDetails
							.slice(page * rowPerPage, page * rowPerPage + rowPerPage)
							.map((transaction, index) => {
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
										<TableCell>{transaction?.transactionDate}</TableCell>
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
