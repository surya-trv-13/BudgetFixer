import React from "react";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Header from "../../components/utility/Header";

const styles = (theme) => ({});

const HomeHeader = () => (
	<Box>
		<Header />
	</Box>
);

export default withStyles(styles, { withTheme: true })(HomeHeader);
