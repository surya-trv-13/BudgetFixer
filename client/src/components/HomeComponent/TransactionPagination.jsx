import { TablePagination } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import PropTypes from "prop-types";
import { useUiSelectors } from "../../selectors/uiSelectors";

const styles = (theme) => ({
	tablePagination: {
		color: "#FFFFFFA6",
		backgroundColor: theme.palette.solidBackground,
		margin: `0 ${theme.typography.pxToRem(28)}`,
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	dataLength: PropTypes.number,
};

const defaultProps = {
	dataLength: 0,
};

const TransactionPagination = ({ classes, dataLength }) => {
	const { gridRowCount, currentGridPage, setGridRowsPerPage, setCurrentTransactionGridPage } =
		useUiSelectors();

	const handleChangePage = (event, page) => {
		setCurrentTransactionGridPage(page);
	};
	const handleChangeRowsPerPage = (event) => {
		setGridRowsPerPage(parseInt(event.target.value, 10));
		setCurrentTransactionGridPage(0);
	};

	return (
		<TablePagination
			rowsPerPageOptions={[2, 5, 10, 20]}
			component="div"
			count={dataLength}
			rowsPerPage={gridRowCount}
			page={currentGridPage}
			backIconButtonProps={{
				"aria-label": "Previous Page",
				style: {
					color: "#FFFFFFA6",
				},
			}}
			nextIconButtonProps={{
				"aria-label": "Next Page",
				style: {
					color: "#5DAAE0",
				},
			}}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
			className={classes.tablePagination}
		/>
	);
};

TransactionPagination.propTypes = propTypes;
TransactionPagination.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(TransactionPagination);
