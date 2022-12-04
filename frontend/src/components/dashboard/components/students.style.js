import styled from "styled-components";

const StudentsHeaderWrapper = styled.header`
	width: 100%;
	gap: var(--gap);
	display: flex;

	flex-direction: column;
	font-size: var(--size-md);
	background: var(--main-bg);
	color: var(--light-color);
	align-items: center;
	padding: 20px;
	justify-content: center;
	@media (max-width: 690px) {
		height: calc(100vh - 44px);
		padding: 30px;
		justify-content: stretch;
		& > a {
			margin: auto 0 0;
		}
	}
`;
const StudentsHeader = styled.h1`
	max-width: 780px;
	line-height: 40px;
	text-align: center;
	@media (max-width: 690px) {
		font-size: 2rem;
		line-height: 30px;
	}
`;

const StudentParagraph = styled.p`
	max-width: 800px;

	font-size: var(--size-sm);
	text-align: center;
	@media (max-width: 690px) {
		font-size: 1.2rem;
		line-height: 18px;
	}
`;

const Button = styled.button`
	background: var(--border-color);
	width: 200px;
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
`;

const StudentDataContainer = styled.table`
	padding: 10px;
	width: 100%;
`;

const StudentHeadingWrapper = styled.tr`
	text-align: center;
	:nth-child(even) {
		background: rgba(176, 176, 176, 0.2);
	}
`;
const StudentWrapper = styled(StudentHeadingWrapper)`
	position: relative;
	transition: all 0.5s ease-in-out;
	&:hover > button {
		visibility: visible;
		opacity: 1;
	}
	&.deleted {
		transform: translateX(-101%);
	}
`;

const DeleteButton = styled(Button)`
	position: absolute;
	visibility: hidden;
	opacity: 0;
	top: 50%;
	right: 2%;
	width: 40px;
	transform: translateY(-50%);
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease-in-out;
	& > img {
		width: 60%;
		height: 60%;
	}
	@media (max-width: 900px) {
		width: 20px;
		height: 20px;
	}
`;
const ImageWrapper = styled.div`
	width: 70px;
	height: 70px;
	margin: 5px auto;
	border: 5px solid var(--light-color-alt);
	border-radius: 50%;
	& > img {
		object-fit: cover;
		border-radius: 50%;
	}
	@media (max-width: 900px) {
		width: 50px;
		height: 50px;
	}
`;

const StudentItems = styled.th`
	font-style: normal;
	font-weight: 600;
	font-size: var(--size-sm);
	line-height: 26px;
	/* identical to box height, or 144% */

	/* Primary colour600 */

	color: #091540;
	padding-bottom: 20px;
	@media (max-width: 900px) {
		font-size: 1.4rem;
		line-height: 18px;
	}
`;
const CSpan = styled.span`
	color: var(--border-color);
`;
const StudentItemsz = styled.td`
	font-style: normal;
	font-weight: 400;
	font-size: var(--size-sm);
	line-height: 26px;
	/* identical to box height, or 144% */

	/* Primary colour600 */

	color: #091540;
	@media (max-width: 900px) {
		font-size: 1.2rem;
		line-height: 18px;
	}
`;
export {
	StudentsHeaderWrapper,
	StudentsHeader,
	StudentParagraph,
	Button,
	StudentDataContainer,
	StudentHeadingWrapper,
	StudentWrapper,
	CSpan,
	StudentItems,
	ImageWrapper,
	StudentItemsz,
	DeleteButton,
};
