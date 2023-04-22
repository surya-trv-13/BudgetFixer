import React from "react";
import PropTypes from "prop-types";
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import { useUiSelectors } from "../../selectors/uiSelectors";
import { TRANSACTION_HEADER_CELLS } from "../../utils/constants/constant";

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
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all transaction" }}
					/>
				</TableCell>
				{TRANSACTION_HEADER_CELLS.map((header) => (
					<TableCell
						key={header.id}
						align={header.numeric ? "right" : "left"}
						padding={header.disablePadding ? "none" : "normal"}
						// sortDirection={orderBy === header.id ? order : false}
					>
						<TableSortLabel
						// active={orderBy === header.id}
						// direction={orderBy === header.id ? order : "asc"}
						// onClick={createSortHandler(header.id)}
						>
							{header.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

TransactionGridHeaders.propTypes = propTypes;
TransactionGridHeaders.defaultProps = defaultProps;

export default TransactionGridHeaders;
