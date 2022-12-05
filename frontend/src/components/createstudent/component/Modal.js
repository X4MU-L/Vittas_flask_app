import React, { useState } from "react";
import {
	ModalWrapper,
	ModalContainer,
	ImageWrapper,
	Paragraph,
} from "./modal.styles";
import errorIcon from "../assets/error.svg";
import successIcon from "../assets/success.svg";

const Modal = ({ error, message, handleModal, showModal }) => {
	return (
		<ModalWrapper
			className={`${showModal ? "display" : ""}`}
			onClick={() => handleModal()}
		>
			<ModalContainer error={error}>
				<ImageWrapper>
					<img src={error ? errorIcon : successIcon} alt="status icons"></img>
				</ImageWrapper>
				<Paragraph>{message}</Paragraph>
			</ModalContainer>
		</ModalWrapper>
	);
};
export default Modal;
