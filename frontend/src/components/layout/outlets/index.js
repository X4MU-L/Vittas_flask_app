import Outlets from "./Outlets";
import { Navbar } from "../../general";
import { useState } from "react";

const Layout = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const handleNavbar = () => {
		setSideBarOpen(!sideBarOpen);
	};
	return (
		<>
			<Navbar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
			<Outlets handleNavbar={handleNavbar} />
		</>
	);
};
export default Layout;
