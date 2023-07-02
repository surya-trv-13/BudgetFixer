import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { useTransactionSelectors } from "../../selectors/transactionSelectors";
import TransactionGridHeaders from "./TransactionGridHeaders";
import { useUiSelectors } from "../../selectors/uiSelectors";
import { formatDate } from "../../utils/dateUtils";
import { pxToRem } from "../../utils/theme/theme";

const styles = (theme) => ({
	root: {
		width: "auto",
		height: "80%",
		backgroundColor: theme.palette.background.default,
		borderRadius: theme.typography.pxToRem(6),
		overflowX: "auto",
		margin: `0 ${pxToRem(28)}`,
	},
	tableRoot: {
		width: "max-content",
	},
	transactionRows: {
		"&:hover": {
			backgroundColor: `${theme.palette.solidBackground.main} !important`,
		},
	},
	tableCellCheckBox: {
		color: theme.palette.grey[200],
		fontSize: "1vw",
	},
	selected: {
		backgroundColor: `${theme.palette.grey[10]} !important`,
		"&:hover": {
			backgroundColor: `${theme.palette.grey[10]} !important`,
		},
	},
	tableCell: {
		color: theme.palette.grey[200],
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

	const setEllipsis = (text) => {
		if (text.length > 30) {
			return (
				<Tooltip title={text} arrow>
					<Typography>{`${text.slice(0, 30)}...`}</Typography>
				</Tooltip>
			);
		}

		return text;
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
										className={classes.transactionRows}
										classes={{ selected: classes.selected }}
									>
										<TableCell padding="checkbox" className={classes.tableCell}>
											<Checkbox
												checked={isTransactionSelected}
												className={classes.tableCellCheckBox}
											/>
										</TableCell>
										<TableCell
											component="th"
											id={transaction._id}
											className={classes.tableCell}
										>
											{transaction.item}
										</TableCell>
										<TableCell className={classes.tableCell}>
											{transaction?.paymentType}
										</TableCell>
										<TableCell className={classes.tableCell}>
											{transaction?.amount}
										</TableCell>
										<TableCell className={classes.tableCell}>
											{transaction?.paymentMode}
										</TableCell>
										<TableCell className={classes.tableCell}>
											{formatDate(transaction?.transactionDate)}
										</TableCell>
										<TableCell className={classes.tableCell}>
											{setEllipsis(transaction?.description)}
										</TableCell>
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
