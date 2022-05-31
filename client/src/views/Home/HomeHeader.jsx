import React from "react";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Header from "../../components/utility/Header";

const styles = (theme) => ({});

const HomeHeader = () => (
	<Box>
		<Header title="Budget Fixer" showLogo />
	</Box>
);

export default withStyles(styles, { withTheme: true })(HomeHeader);
