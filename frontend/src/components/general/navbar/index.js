import React from "react";
import NavbarComponent from "./components/Navbar";
const Navbar = ({ sideBarOpen, setSideBarOpen }) => {
	return (
		<NavbarComponent
			sideBarOpen={sideBarOpen}
			setSideBarOpen={setSideBarOpen}
		/>
	);
};
export default Navbar;
