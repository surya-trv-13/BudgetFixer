import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		background: theme.palette.solidBackground.main,
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const TransactionDetails = ({ classes }) => {
	const column = [
		{
			field: "item",
			name: "Item",
		},
		{
			field: "paymentType",
			name: "Payment Type",
		},
		{
			field: "amount",
			name: "Amount",
		},
		{
			field: "paymentMode",
			name: "Payment Mode",
		},
		{
			field: "transactionDate",
			name: "Transaction Date",
		},
		{
			field: "description",
			name: "Description",
		},
	];
	return (
		<Box className={classes.root}>
			<DataGrid
				columns={column}
				rows={[
					{ id: 2, name: "Ipsita" },
					{ id: 13, name: "Surya" },
				]}
				checkboxSelection
				disableSelectionOnClick
				pageSize={10}
			/>
		</Box>
	);
};

TransactionDetails.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetails);
