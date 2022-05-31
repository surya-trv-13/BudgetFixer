import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import Logo from "../../static/image/logo1080.png";

const styles = (theme) => ({
	root: {
		height: "7vh",
		fontSize: theme.typography.pxToRem(30),
		borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.common.white}`,
		padding: `0 ${theme.typography.pxToRem(10)}`,
	},
	logo: {
		height: theme.typography.pxToRem(30),
	},
	title: {
		display: "flex",
		alignItems: "center",
	},
	titleString: {
		padding: `${theme.typography.pxToRem(2)} 0`,
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string,
	showLogo: PropTypes.bool,
};

const defaultProps = {
	title: "",
	showLogo: false,
};

const Header = ({ classes, title, showLogo }) => (
	<Box className={classes.root}>
		<Box className={classes.title}>
			{showLogo && <img src={Logo} alt="Logo" className={classes.logo} />}
			<Typography className={classes.titleString} variant="h2">
				{title}
			</Typography>
		</Box>
	</Box>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default withStyles(styles, { withTheme: true })(Header);
