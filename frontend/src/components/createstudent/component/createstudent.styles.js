import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

const Form = styled.form`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

const Label = styled.label`
	font-size: 1.4rem;
	font-weight: 400;
	color: black;

	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

const ImageWrapper = styled.div`
	width: 110px;
	height: 110px;
	margin: 5px auto;
	border: 5px solid var(--light-color-alt);
	border-radius: 50%;
	& > img {
		object-fit: cover;
		border-radius: 50%;
	}
	@media (max-width: 900px) {
		width: 80px;
		height: 80px;
	}
`;
const InputStyles = styled.input`
	display: block;
	margin-top: 0.6rem;
	border: 1px solid #adb1bf;
	border-radius: 8px;
	padding: 15px 22px;
	cursor: text;
	width: 100%;
	color: black;
	font-size: 1.4rem;

	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
	}

	&:focus {
		border: 1px solid #091540;
	}
	&.error {
		border-color: red;
	}
	&::placeholder {
		color: #adb1bf;
	}
`;
const Button = styled.button`
	background: var(--border-color);
	width: 100%;
	height: 48px;
	font-size: var(--size-sm);
	text-align: center;
	border: 2px solid transparent;
	border-radius: 10px;
	transition: all 300ms ease-in;
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
	&:hover {
		border-color: var(--border-color);
		background: #c6582c;
	}

	&:disabled {
		background: var(--transparent-light-color);
		/* Primary/200 */

		cursor: not-allowed;
		pointer-events: none;
	}
`;

const Error = styled.p`
	color: red;
	font-size: 1.4rem;
	color: #ff414e;
	font-weight: 400;

	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export { Wrapper, Form, Label, InputStyles, Button, Error, ImageWrapper };
