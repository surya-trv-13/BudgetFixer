import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Logo from "../../static/image/logo1080.png";

const styles = (theme) => ({
	root: {
		height: "7vh",
		fontSize: theme.typography.pxToRem(30),
		padding: `0 ${theme.typography.pxToRem(10)}`,
		display: "flex",
		justifyContent: "space-between",
	},
	logo: {
		height: theme.typography.pxToRem(30),
		margin: `0 ${theme.typography.pxToRem(10)}`,
	},
	title: {
		display: "flex",
		alignItems: "center",
	},
	titleString: {
		padding: `${theme.typography.pxToRem(2)} 0`,
		color: "#FFFFFFA6",
	},
	pageTag: {},
	labelTag: {
		color: "#FFFFFF",
		backgroundColor: theme.palette.secondary.main,
		borderRadius: `0 0 ${theme.typography.pxToRem(3)} ${theme.typography.pxToRem(3)}`,
		padding: "0 1vw 0 1vw",
	},
	userDetails: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	userName: {
		color: theme.palette.common.white,
	},
	moreOpsIcon: {
		color: theme.palette.common.white,
	},
	iconButton: {
		padding: theme.typography.pxToRem(12),
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

const Header = ({ classes, title, showLogo }) => {
	const handleMoreOps = () => {};
	return (
		<Box className={classes.root}>
			<Box className={classes.title}>
				{showLogo && <img src={Logo} alt="Logo" className={classes.logo} />}
				<Typography className={classes.titleString} variant="h2">
					{title}
				</Typography>
			</Box>
			<Box className={classes.pageTag}>
				<span className={classes.labelTag}>Dashboard</span>
			</Box>
			<Box className={classes.userDetails}>
				<Typography variant="h4" className={classes.userName}>
					John Doe
				</Typography>
				<IconButton className={classes.iconButton} onClick={handleMoreOps}>
					<MoreVertIcon className={classes.moreOpsIcon} />
				</IconButton>
			</Box>
		</Box>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default withStyles(styles, { withTheme: true })(Header);
