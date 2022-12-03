import React from "react";
import { Outlet } from "react-router-dom";

import { OutletWrapper } from "./outlets.style";
import { ReactComponent as MenuIcon } from "./assets/open.svg";
const Outlets = ({ handleNavbar }) => {
	return (
		<OutletWrapper>
			<MenuIcon onClick={handleNavbar} />
			<Outlet />
		</OutletWrapper>
	);
};
export default Outlets;
