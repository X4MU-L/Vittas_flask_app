import React from "react";
import { Link, useLocation } from "react-router-dom";
import { _links } from "./constant";
import LOGO from "../assets/logo.jpg";
import CloseIcon from "../assets/close-line.svg";
import useScreenSize from "../../../hooks/useScreenSize";
import {
	CloseIconWrapper,
	NavbarWrapper,
	NavbarContainer,
	LogoWrapper,
	NavitemsWrapper,
} from "./navbar.styled";

const Navbar = ({ sideBarOpen, setSideBarOpen }) => {
	const { pathname } = useLocation();
	const { screenWidth } = useScreenSize();
	const mobile = screenWidth <= 690;

	const handleNavbar = () => {
		setSideBarOpen(!sideBarOpen);
	};

	return (
		<NavbarWrapper close={sideBarOpen} className="navbar">
			<NavbarContainer>
				<CloseIconWrapper onClick={handleNavbar}>
					<img src={CloseIcon} alt="close icon" />
				</CloseIconWrapper>
				<LogoWrapper>
					<Link to="/">
						<img src={LOGO} alt="logo" />
					</Link>
				</LogoWrapper>
				<NavitemsWrapper>
					{_links.map((link, i) => {
						const { path, name } = link;
						return (
							<Link
								data-text={name}
								key={i}
								className={pathname === path ? "isActive" : ""}
								to={path}
							>
								<span>{mobile ? name.split(" ")[0] : name}</span>
							</Link>
						);
					})}
				</NavitemsWrapper>
			</NavbarContainer>
		</NavbarWrapper>
	);
};
export default Navbar;
