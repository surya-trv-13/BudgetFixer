import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { useUiSelectors } from "../../selectors/uiSelectors";

const MenuComponent = () => {
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
		>
			<MenuItem onClick={handleClose}>Profile</MenuItem>
			<MenuItem onClick={handleClose}>My account</MenuItem>
			<MenuItem onClick={handleClose}>Logout</MenuItem>
		</Menu>
	);
};

MenuComponent.propTypes = {};

export default MenuComponent;
