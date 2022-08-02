import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, MenuItem } from "@material-ui/core";
import { useUiSelectors } from "../../selectors/uiSelectors";

const MenuComponent = (props) => {
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
