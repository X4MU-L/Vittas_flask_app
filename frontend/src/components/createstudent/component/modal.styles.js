import styled from "styled-components";

const ModalWrapper = styled.div`
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 11;
	padding: 20px;
	background: var(--transparent-dark-color);
	display: flex;
	align-items: center;
	justify-content: center;
	transform: scale(0);
	visibility: hidden;
	opacity: 0;
	transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s;
	&.display {
		transform: scale(1);
		visibility: visible;
		opacity: 1;
	}
`;

const ModalContainer = styled.div`
	max-width: 500px;
	width: 100%;
	border-radius: 20px;
	border: ${({ error }) => (error ? "8px solid #ed4337" : "8px solid #53a653")};
	color: ${({ error }) => (error ? "#ed4337" : " #53a653")};
	display: flex;
	padding: 40px 30px;
	background: white;
	justify-content: center;
	flex-direction: column;
	gap: var(--gap);
`;

const ImageWrapper = styled.div`
	width: 70px;
	height: 70px;
	display: flex;
	margin: auto;
	align-items: center;
	jusify-content: center;
	& > img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 900px) {
		width: 40px;
		height: 40px;
	}
`;

const Paragraph = styled.p`
	font-size: 2rem;
	line-height: 24px;
	text-align: center;
	@media (max-width: 690px) {
		font-size: 1.5rem;
		line-height: 18px;
	}
`;

export { ModalWrapper, ModalContainer, ImageWrapper, Paragraph };
