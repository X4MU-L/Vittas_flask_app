import styled from "styled-components";

const Dropdowncontainer = styled.div`
	text-align: left;
	box-sizing: border-box;
	border: 1px solid #ccc;
	position: relative;
	background: #f4f4f4;
	border-radius: 10px;

	&.error {
		border-color: red;
	}
`;
const DropdownInput = styled.div`
	padding: 15px 22px;
	position: relative;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	color: rgba(0, 0, 0, 0.94);
	justify-content: space-between;
	font-size: 14px;
	line-height: 17px;
	user-select: none;
`;

const SelectedValue = styled.div`
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */

	display: flex;
	align-items: center;

	color: rgba(0, 0, 0, 0.94);
`;

const DropdownMenu = styled.div`
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 10px;
	overflow: auto;
	height: 0px;
	visibility: hidden;
	z-index: 3;
	background-color: #fff;
	transition: all 300ms ease-in-out;
	&.display {
		visibility: visible;
		height: 150px;
		height: content;
	}
`;

const DropdownItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	cursor: pointer;

	:hover {
		background-color: #9fc3f870;
	}
	&.selected {
		background: #354ca0;
		color: #fff;
	}
`;

export {
	Dropdowncontainer,
	DropdownInput,
	SelectedValue,
	DropdownMenu,
	DropdownItem,
};
