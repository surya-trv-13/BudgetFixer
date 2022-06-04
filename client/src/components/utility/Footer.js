import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import RowFlex from "./RowFlex";
import { COPYRGHT_TXT_FOOTER } from "../../utils/constants/constant";

const styles = () => ({
	footer: {
		position: "fixed",
		width: "98.3%",
		boxSizing: "border-box",
		bottom: 0,
	},
	rowStyles: {
		display: "flex",
		flexFlow: "noWrap",
		alignItems: "center",
		justifyContent: "space-between",
	},
	footerText: {
		fontSize: "0.889rem",
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	text: PropTypes.string,
};

const defaultProps = {
	text: "",
};

const Footer = ({ classes, text }) => (
	<Box className={classes.footer}>
		<RowFlex rootClass={classes.rowStyles}>
			<Typography className={classes.footerText}>{text}</Typography>
			<Box>
				<Typography className={classes.footerText}>{COPYRGHT_TXT_FOOTER}</Typography>
			</Box>
		</RowFlex>
	</Box>
);
Footer.defaultProps = defaultProps;
Footer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Footer);
