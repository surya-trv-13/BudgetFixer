import React from "react";
import PropTypes from "prop-types";
import { withWidth } from "@material-ui/core";
import FlexGrid from "../utility/FlexGrid";

const LayoutWrapper = ({ componentGetter, dataToPass, width, layoutConfig }) => {
	const layout = layoutConfig[width];
	const getComponent = (componentID) => componentGetter.getComponent(componentID, dataToPass);

	// TODO : Need to find if we can solve FlexGrid without margin -7px
	return <FlexGrid layoutConfiguration={layout} getComponent={getComponent} />;
};

LayoutWrapper.propTypes = {
	componentGetter: PropTypes.shape({
		getComponent: PropTypes.func.isRequired,
	}).isRequired,
	dataToPass: PropTypes.object,
	width: PropTypes.string.isRequired,
	layoutConfig: PropTypes.object.isRequired,
};

LayoutWrapper.defaultProps = {
	dataToPass: {},
};

export default withWidth()(LayoutWrapper);
