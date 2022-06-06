import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid, Paper } from "@material-ui/core";
import SummaryDetails from "../../components/HomeComponent/SummaryDetails";

const styles = (theme) => ({
	box: {
		overflowY: "scroll",
		height: "88.65vh",
		"&::-webkit-scrollbar": {
			width: 0,
		},
		boxSizing: "border-box",
		width: "100%",
	},
	paperStyle: {
		height: "18vh",
		padding: theme.typography.pxToRem(8),
		textAlign: "center",
		color: theme.palette.primary.main,
		whiteSpace: "nowrap",
		backgroundColor: "#252C48",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const HomeComponent = ({ classes }) => (
	<Grid container className={classes.box}>
		<Grid xs={12} container direction="row" spacing={4}>
			{/* TODO: Get the details of the 4 boxes */}
			<Grid xs={3} item>
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
			<Grid xs={3} item>
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
			<Grid xs={3} item>
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
			<Grid xs={3} item>
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
		</Grid>
		<Grid xs={4} container spacing={4}>
			<Grid xs={12} item justifyContent="center">
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
			<Grid xs={12} item justifyContent="center">
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
		</Grid>
		<Grid xs={8} container spacing={4}>
			<Grid xs={12} item>
				<Paper className={classes.paperStyle}></Paper>
			</Grid>
		</Grid>
	</Grid>
);

HomeComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(HomeComponent);
