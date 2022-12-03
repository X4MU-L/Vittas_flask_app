import styled from "styled-components";

const OutletWrapper = styled.section`
	margin: 80px auto 10px;
	padding: 0 10px;
	font-size: var(--size-sm);
	display: flex;
	flex-direction: column;
	@media (max-width: 690px) {
		margin: 20px auto 10px;
	}
	& > svg {
		@media (min-width: 690px) {
			display: none;
		}
	}
`;

export { OutletWrapper };
