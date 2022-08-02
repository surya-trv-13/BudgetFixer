import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Logo from "../../static/image/logo1080.png";
import RowFlex from "./RowFlex";
import { useAuthSelectors } from "../../selectors/authSelectors";

const styles = (theme) => ({
	rowFlexStyle: {
		height: "7vh",
		fontSize: theme.typography.pxToRem(30),
		boxSizing: "border-box",
		padding: `0 ${theme.typography.pxToRem(10)}`,
		justifyContent: "space-between",
		position: "relative",
		flexGrow: 1,
		paddingTop: theme.typography.pxToRem(12),
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
	pageTag: {
		marginTop: `-${theme.typography.pxToRem(12)}`,
	},
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
	emptyRightBox: {
		width: theme.typography.pxToRem(350),
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string,
	showLogo: PropTypes.bool,
	tagText: PropTypes.string,
	showTag: PropTypes.bool,
	showLoggedIn: PropTypes.bool,
};

const defaultProps = {
	title: "",
	showLogo: false,
	showTag: false,
	tagText: "Dashboard",
	showLoggedIn: false,
};

const Header = ({ classes, title, showLogo, tagText, showTag, showLoggedIn }) => {
	const { loginData } = useAuthSelectors(); // TODO: Will change it to user/me
	const handleMoreOps = () => {};
	return (
		<RowFlex rootClass={classes.rowFlexStyle}>
			<Box className={classes.title}>
				{showLogo && <img src={Logo} alt="Logo" className={classes.logo} />}
				<Typography className={classes.titleString} variant="h2">
					{title}
				</Typography>
			</Box>
			{showTag ? (
				<Box className={classes.pageTag}>
					<span className={classes.labelTag}>{tagText}</span>
				</Box>
			) : (
				<Box></Box>
			)}
			{showLoggedIn ? (
				<Box className={classes.userDetails}>
					<Typography variant="h4" className={classes.userName}>
						{loginData?.user?.name}
					</Typography>
					<IconButton className={classes.iconButton} onClick={handleMoreOps}>
						<MoreVertIcon className={classes.moreOpsIcon} />
					</IconButton>
				</Box>
			) : (
				<Box className={classes.emptyRightBox}></Box>
			)}
		</RowFlex>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default withStyles(styles, { withTheme: true })(Header);
