import React from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Divider, Grid } from "@material-ui/core";
import SignUpForm from "./SignUpForm";
import SignUpIllustation from "../../static/image/signUpIllustartion.png";

const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		background: theme.palette.solidBackground.main,
	},
	imgIllustrtaion: {
		height: theme.typography.pxToRem(500),
	},
	ilustration: {
		height: "100%",
		width: "100%",
	},
	imageDiv: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	verticalDivider: {
		width: theme.typography.pxToRem(1),
		height: "95%",
		margin: theme.typography.pxToRem(20),
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const SignUpGridComponent = ({ classes }) => (
	<Grid container direction="row" className={classes.root}>
		<Grid item xs={5}>
			<SignUpForm />
		</Grid>
		<Grid item xs={7}>
			<Grid container direction="row" className={classes.ilustration}>
				<Grid item xs={1}>
					<Divider
						orientation="vertical"
						variant="inset"
						light
						className={classes.verticalDivider}
					/>
				</Grid>
				<Grid item xs={11} className={classes.imageDiv}>
					<img src={SignUpIllustation} alt="Login" className={classes.imgIllustrtaion} />
				</Grid>
			</Grid>
		</Grid>
	</Grid>
);

SignUpGridComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(SignUpGridComponent);
