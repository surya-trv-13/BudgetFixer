import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useDashboardSelectors } from "../../selectors/dashboardSelectors";
import { getFormattedDate } from "../../utils/dateUtils";

const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		background: theme.palette.solidBackground.main,
		borderRadius: theme.typography.pxToRem(6),
	},
	header: {
		height: "10%",
		paddingLeft: theme.typography.pxToRem(12),
	},
	headerText: {
		color: "#FFFFFFA6",
	},
	bodyBox: {
		height: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	bodyData: {
		color: "#FFFFFFA5",
		fontSize: theme.typography.pxToRem(72),
		fontWeight: "100",
	},
	subtitleBox: {
		height: "40%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	subtitleData: {
		color: "#FFFFFFA6",
		fontSize: theme.typography.pxToRem(24),
		fontWeight: "lighter",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	dotValue: PropTypes.string.isRequired,
	boxHeader: PropTypes.string.isRequired,
};

const SummaryDetails = ({ classes, dotValue, boxHeader }) => {
	const { getDashboardData, getDashboardLoading } = useDashboardSelectors();
	return (
		<Box className={classes.root}>
			<Box className={classes.header}>
				<Typography className={classes.headerText}>{boxHeader}</Typography>
			</Box>
			<Box className={classes.bodyBox}>
				<Typography variant="h1" className={classes.bodyData}>
					&#8377;{" "}
					{!getDashboardLoading && getDashboardData ? getDashboardData?.[dotValue] : ""}
				</Typography>
			</Box>
			<Box className={classes.subtitleBox}>
				<Typography className={classes.subtitleData}>{getFormattedDate()}</Typography>
			</Box>
		</Box>
	);
};

SummaryDetails.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(SummaryDetails);
