import React from "react";
import { withStyles } from "@material-ui/styles";
import { Divider, Grid } from "@material-ui/core";
import { PropTypes } from "prop-types";
import LoginForm from "./LoginForm";
import LoginIllustration from "../../static/image/loginIllustration.png";

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

const LoginGridComponent = ({ classes }) => (
	<Grid container direction="row" className={classes.root}>
		<Grid item xs={6}>
			<LoginForm />
		</Grid>
		<Grid item xs={6}>
			<Grid container direction="row" className={classes.ilustration}>
				<Grid xs={1}>
					<Divider
						orientation="vertical"
						variant="inset"
						light
						className={classes.verticalDivider}
					/>
				</Grid>
				<Grid xs={11} className={classes.imageDiv}>
					<img src={LoginIllustration} alt="Login" className={classes.imgIllustrtaion} />
				</Grid>
			</Grid>
		</Grid>
	</Grid>
);

LoginGridComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(LoginGridComponent);
