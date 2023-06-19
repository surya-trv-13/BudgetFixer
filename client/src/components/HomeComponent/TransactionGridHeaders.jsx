import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import { useUiSelectors } from "../../selectors/uiSelectors";
import { TRANSACTION_HEADER_CELLS } from "../../utils/constants/constant";

const styles = (theme) => ({
	tableCell: {
		color: theme.palette.grey[50],
	},
	checkbox: {
		color: theme.palette.grey[50],
		fontSize: "1vw",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number,
	rowCount: PropTypes.number,
	transactionDetails: PropTypes.object.isRequired,
};

const defaultProps = {
	numSelected: 0,
	rowCount: 0,
};

const TransactionGridHeaders = ({ classes, numSelected, rowCount, transactionDetails }) => {
	const { setGridSelections } = useUiSelectors();

	const onSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = transactionDetails.map((transaction) => transaction._id);
			setGridSelections(newSelected);
			return;
		}

		setGridSelections([]);
	};

	return (
		<TableHead>
			<TableRow className={classes.tableRow}>
				<TableCell padding="checkbox" className={classes.tableCell}>
					<Checkbox
						className={classes.checkbox}
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all transaction" }}
					/>
				</TableCell>
				{TRANSACTION_HEADER_CELLS.map((header) => (
					<TableCell
						className={classes.tableCell}
						key={header.id}
						padding={header.disablePadding ? "none" : "normal"}
					>
						<TableSortLabel>{header.label}</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

TransactionGridHeaders.propTypes = propTypes;
TransactionGridHeaders.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(TransactionGridHeaders);
