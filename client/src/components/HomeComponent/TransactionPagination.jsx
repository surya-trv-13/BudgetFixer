import { TablePagination } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { useUiSelectors } from "../../selectors/uiSelectors";

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
			// classes={{
			// 	selectIcon: classes.selectIco,
			// 	root: classes.selectList,
			// }}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
			style={{ color: "#FFFFFFA6", backgroundColor: "#252C48" }}
		/>
	);
};

TransactionPagination.propTypes = propTypes;
TransactionPagination.defaultProps = defaultProps;

export default TransactionPagination;
