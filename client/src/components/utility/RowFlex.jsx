import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = () => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		height: "100%",
		width: "100%",
	},
});

const propTypes = {
	classes: PropTypes.object,
	rootClass: PropTypes.string,
	children: PropTypes.node.isRequired,
};

const defaultProps = {
	classes: {},
	rootClass: {},
};

const RowFlex = ({ classes, rootClass, children }) => (
	<div className={clsx(classes.root, rootClass)}>{children}</div>
);

RowFlex.defaultProps = defaultProps;
RowFlex.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(RowFlex);
