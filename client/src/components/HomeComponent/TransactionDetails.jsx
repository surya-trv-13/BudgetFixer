import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useTransactionSelectors } from "../../selectors/transactionSelectors";

const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		background: theme.palette.solidBackground.main,
		borderRadius: theme.typography.pxToRem(6),
	},
	dataGrid: {
		border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.dark}`,
		borderRadius: theme.typography.pxToRem(4),
		"& .MuiDataGrid-columnsContainer": {
			minHeight: `${theme.typography.pxToRem(56)} !important`,
			maxHeight: `${theme.typography.pxToRem(56)} !important`,
			lineHeight: `${theme.typography.pxToRem(56)} !important`,
			borderBottom: `${theme.typography.pxToRem(1)} solid #FFFFFFA5`,
			padding: `0 ${theme.typography.pxToRem(10)}`,
		},
		"& .MuiDataGrid-columnHeaderTitleContainer": {
			padding: `0 ${theme.typography.pxToRem(6)}`,
		},
		"& .MuiDataGrid-columnHeaderWrapper": {
			minWidth: `${theme.typography.pxToRem(650)} !important`,
		},
		"& .MuiDataGrid-columnHeaderCheckbox": {
			width: `${theme.typography.pxToRem(50)} !important`,
			maxWidth: `${theme.typography.pxToRem(50)} !important`,
			minWidth: `${theme.typography.pxToRem(50)} !important`,
		},
		"& .MuiDataGrid-columnHeader": {
			padding: `0 ${theme.typography.pxToRem(10)}`,
		},
		"& .MuiDataGrid-columnHeader--sortable": {
			width: `${theme.typography.pxToRem(250)} !important`,
			maxWidth: `${theme.typography.pxToRem(250)} !important`,
			minWidth: `${theme.typography.pxToRem(250)} !important`,
		},
		"& .MuiDataGrid-columnSeparator": {
			right: `-${theme.typography.pxToRem(12)}`,
			minHeight: `${theme.typography.pxToRem(56)} !important`,
		},
		"& .MuiDataGrid-menuIcon": {
			fontSize: theme.typography.pxToRem(20),
			marginRight: `-${theme.typography.pxToRem(6)}`,
		},
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const TransactionDetails = ({ classes }) => {
	const { transactionDetails, transactionDetailsLoading } = useTransactionSelectors();
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
				className={classes.dataGrid}
				columns={column}
				rows={!transactionDetailsLoading && transactionDetails ? transactionDetails : []}
				getRowId={(row) => row._id}
				checkboxSelection
				disableSelectionOnClick
				pageSize={10}
			/>
		</Box>
	);
};

TransactionDetails.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TransactionDetails);
