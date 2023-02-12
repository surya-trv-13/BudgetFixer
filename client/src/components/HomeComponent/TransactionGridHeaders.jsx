import React from "react";
import PropTypes from "prop-types";
import { Checkbox, TableCell, TableHead, TableRow } from "@material-ui/core";

const propTypes = {
	classes: PropTypes.object.isRequired,
};
const TransactionGridHeaders = ({ classes }) => {
	const headerCells = [
		{
			id: "item",
			numeric: false,
			disablePadding: true,
			label: "Item",
		},
		{
			id: "paymentType",
			numeric: false,
			disablePadding: true,
			label: "Payment Type",
		},
		{
			id: "amount",
			numeric: true,
			disablePadding: true,
			label: "Amount",
		},
		{
			id: "paymentMode",
			numeric: false,
			disablePadding: true,
			label: "Payment Mode",
		},
		{
			id: "transactionDate",
			numeric: false,
			disablePadding: true,
			label: "Transaction Date",
		},
		{
			id: "description",
			numeric: false,
			disablePadding: true,
			label: "Descriptions",
		},
	];

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all transaction" }}
					/>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

TransactionGridHeaders.propTypes = propTypes;

export default TransactionGridHeaders;
