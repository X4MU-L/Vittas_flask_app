import styled from "styled-components";

const NavbarWrapper = styled.nav`
	position: fixed;
	z-index: 10;
	top: 0;
	height: 80px;
	width: 100%;
	font-size: var(--size-sm);
	color: var(--light-color);
	background: var(--main-bg);
	display: flex;
	justify-content: center;
	margin: 0 auto;

	@media (max-width: 690px) {
		height: 100vh;
		max-width: 150px;
		flex-direction: column;
		justify-content: start;
		margin: 0;
		transition: all 300ms ease-in-out;
		transform: ${({ close }) =>
			close ? "translateX(0)" : "translateX(-101%)"};
	}
`;
const NavbarContainer = styled.div`
	max-width: 90%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: var(--gap);

	@media (max-width: 690px) {
		flex-direction: column;
		margin: 30px auto;
	}
`;

const CloseIconWrapper = styled.div`
	width: 30px;
	height: 30px;
	display: flex;
	align-self: center;
	margin-bottom: 20px;
	cursor: pointer;

	/*display on large small screen only*/
	@media (min-width: 690px) {
		display: none;
	}
`;
const LogoWrapper = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-self: center;
`;
const NavitemsWrapper = styled.ul`
	display: flex;

	@media (max-width: 690px) {
		position: relative;
		align-items: center;
		gap: var(--gap);
		flex-direction: column;
	}

	& > a {
		position: relative;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		width: 180px;
		transition: all 300ms ease-in-out;
		&:hover {
			background: var(--transparent-light-color);
		}
		&:after {
			position: absolute;
			content: "";
			width: 100%;
			height: 5px;
			bottom: 0;
			transition: all 300ms ease-in-out;
		}
		&.isActive {
			color: var(--border-color);
		}
		&.isActive {
			&:after {
				background: var(--border-color);
			}
		}
		@media (max-width: 690px) {
			max-width: 120px;
			padding: 10px var(--padding);
			border-radius: 50px;
			border: 2px solid transparent;
			&.isActive {
				font-weight: 600;
				color: var(--light-color);
				border-color: var(--border-color);
			}
			/*add a tool tip to the items
            hidden by default*/
			&::after {
				z-index: 999;
				transform: translateY(-50%);
				visibility: hidden;
				opacity: 0;
				border-radius: 8px;
				font-weight: 300;
				top: 50%;
				color: white;
				display: flex;
				height: 100%;
				background: gray;
				font-size: var(--size-xsm);
				content: attr(data-text);
				align-items: center;
				height: max-content;
				padding: 3px 6px;
				width: max-content;
				justify-content: center;
				left: 140px;
				transition: visibility 0.3s linear;
			}
			&::before {
				transform-origin: center;
				visibility: hidden;
				opacity: 0;
				display: flex;
				content: " ";
				position: absolute;
				top: calc(50%);
				right: -25px;
				transform: translateY(-50%);
				border-width: 8px;
				border-style: solid;
				border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;
				transition: visibility 0.3s linear;
			}
			&:hover {
				&::before,
				&::after {
					opacity: 1;
					visibility: visible;
				}
			}
			/*remove tooltip display.. no longer necessary*/
			&.isActive {
				&::after {
					visibility: hidden;
					opacity: 0;
					/*reset original background on active on wide screen*/
					background: gray;
				}
				&::before {
					opacity: 0;
					visibility: hidden;
				}
			}
		}
	}
`;

export {
	CloseIconWrapper,
	NavbarWrapper,
	NavbarContainer,
	LogoWrapper,
	NavitemsWrapper,
};
