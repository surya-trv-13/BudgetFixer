import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Menu, MenuItem } from "@material-ui/core";
import { useUiSelectors } from "../../selectors/uiSelectors";

const styles = (theme) => ({
	menuComponentRoot: {
		backgroundColor: theme.palette.primary.light,
	},
	menuItem: {
		color: "#FFFFFFA6",
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
			color: "#FFFFFFA3",
		},
	},
});

const propTypes = {
	classes: PropTypes.object.isRequired,
};

const MenuComponent = ({ classes }) => {
	const { headerMenuAnchorEl, isHeaderMenuOpen, setMenuOpen } = useUiSelectors();
	const handleClose = () => {
		setMenuOpen({
			anchorEl: null,
			open: false,
		});
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
			<MenuItem className={classes.menuItem} onClick={handleClose}>
				Profile
			</MenuItem>
			<MenuItem className={classes.menuItem} onClick={handleClose}>
				My account
			</MenuItem>
			<MenuItem className={classes.menuItem} onClick={handleClose}>
				Logout
			</MenuItem>
		</Menu>
	);
};

MenuComponent.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(MenuComponent);
