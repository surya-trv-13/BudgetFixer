import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Menu, MenuItem } from "@material-ui/core";
import { useUiSelectors } from "../../selectors/uiSelectors";
import { useAuthSelectors } from "../../selectors/authSelectors";

const styles = (theme) => ({
	menuComponentRoot: {
		"& .MuiPaper-root": {
			backgroundColor: theme.palette.background.default,
			transformOrigin: `${theme.typography.pxToRem(142)} -${theme.typography.pxToRem(
				16
			)} !important`,
			top: `${theme.typography.pxToRem(16)} !important`,
			left: `100% - ${theme.typography.pxToRem(250)} !important`,
			"& .MuiList-padding": {
				paddingTop: theme.typography.pxToRem(8),
				paddingBottom: theme.typography.pxToRem(8),
			},
		},
	},
	menuItem: {
		color: "#FFFFFFA6",
		paddingTop: theme.typography.pxToRem(6),
		paddingBottom: theme.typography.pxToRem(6),
		paddingLeft: theme.typography.pxToRem(16),
		paddingRight: theme.typography.pxToRem(16),
		minHeight: theme.typography.pxToRem(48),
		"&:hover": {
			background: theme.palette.solidBackground.main,
			color: "#FFFFFFA3",
		},
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const MenuComponent = ({ classes }) => {
	const { headerMenuAnchorEl, isHeaderMenuOpen, setMenuOpen } = useUiSelectors();
	const { userLogOutStart, removeAuthTokenVal } = useAuthSelectors();

	const handleClose = () => {
		setMenuOpen({
			anchorEl: null,
			open: false,
		});
	};

	const handleLogout = async () => {
		handleClose();
		await userLogOutStart(localStorage.getItem("authToken"));
		await removeAuthTokenVal();
		await localStorage.removeItem("authToken");
	};
	return (
		<Menu
			id="simple-menu"
			anchorEl={headerMenuAnchorEl}
			getContentAnchorEl={null}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			transformOrigin={{ vertical: "top", horizontal: "center" }}
			keepMounted
			open={isHeaderMenuOpen}
			onClose={handleClose}
			className={classes.menuComponentRoot}
		>
			<MenuItem className={classes.menuItem} onClick={handleLogout}>
				Logout
			</MenuItem>
			<MenuItem className={classes.menuItem} onClick={handleClose}>
				Logout from All Devices
			</MenuItem>
		</Menu>
	);
};

MenuComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(MenuComponent);
