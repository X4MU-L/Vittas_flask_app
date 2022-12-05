import React from "react";
import { Label, InputStyles, Error } from "./createstudent.styles";

const Input = ({ label, id, errorMessage, isError, ...rest }) => {
	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<InputStyles name={id} {...rest} />
			{isError && <Error>{errorMessage}</Error>}
		</div>
	);
};

export default Input;
