import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";

const styles = (theme) => ({});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const defaultProps = {};

const Header = ({ classes }) => (
	<Box className={classes.root}>
		<Box className={classes.title}>
			<Typography className={classes.titleString}>Budget Fixer</Typography>
		</Box>
	</Box>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default withStyles(styles, { withTheme: true })(Header);
