import { useEffect, useRef } from "react";
import { useState } from "react";
import {
	Dropdowncontainer,
	DropdownInput,
	SelectedValue,
	DropdownMenu,
	DropdownItem,
} from "./select.style";

const Icon = () => {
	return (
		<svg
			width="12"
			height="7"
			viewBox="0 0 12 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.4599 0.270707C10.6296 0.0972844 10.8588 0 11.0976 0C11.3365 0 11.5657 0.0972844 11.7354 0.270707C11.8192 0.355868 11.8858 0.457377 11.9312 0.569327C11.9766 0.681278 12 0.801432 12 0.9228C12 1.04417 11.9766 1.16432 11.9312 1.27627C11.8858 1.38822 11.8192 1.48973 11.7354 1.57489L6.63843 6.72972C6.46831 6.9029 6.23896 7 6 7C5.76104 7 5.53169 6.9029 5.36157 6.72972L0.264583 1.57489C0.180785 1.48973 0.114238 1.38822 0.0688152 1.27627C0.023392 1.16432 0 1.04417 0 0.9228C0 0.801432 0.023392 0.681278 0.0688152 0.569327C0.114238 0.457377 0.180785 0.355868 0.264583 0.270707C0.43431 0.0972844 0.663508 0 0.902359 0C1.14121 0 1.37041 0.0972844 1.54013 0.270707L6.00196 4.4982L10.4599 0.270707Z"
				fill="#C4C4C4"
			/>
		</svg>
	);
};

const Select = ({ placeHolder, options, onChange, error }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const inputRef = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (inputRef.current && !inputRef.current.contains(e.target)) {
				setShowMenu(false);
			}
		};

		window.addEventListener("click", handler);
		return () => {
			window.removeEventListener("click", handler);
		};
	});

	const handleInputclick = (e) => {
		setShowMenu(!showMenu);
	};

	const onItemSelect = (option) => {
		setSelectedValue(option);
		//this will give you the values to use for backend
		onChange(option);
	};

	const getDisplay = () => {
		if (!selectedValue) {
			return placeHolder;
		}
		return selectedValue.label;
	};

	const isSelected = (option) => {
		if (!selectedValue) {
			return false;
		}
		return selectedValue.label === option.label;
	};

	return (
		<Dropdowncontainer className={`${error ? "error" : ""}`}>
			<DropdownInput ref={inputRef} onClick={handleInputclick}>
				<SelectedValue>{getDisplay()}</SelectedValue>
				<div className="dropdown-tool">
					<Icon />
				</div>
			</DropdownInput>

			<DropdownMenu className={`${showMenu ? "display" : ""}`}>
				{options.map((item) => (
					<DropdownItem
						key={item.name}
						className={`${isSelected(item) && "selected"}`}
						onClick={() => onItemSelect(item)}
					>
						{item.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdowncontainer>
	);
};

export default Select;
