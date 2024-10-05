import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
	text-align: center;
	${font({
		family: '"Josefin Sans", sans-serif',
		weight: 600,
		Fmax: 36,
		Fmin: 30,
	})}
	letter-spacing: 5px;
	margin-bottom: 90px;
	position: relative;

	&::before {
		content: "";
		display: block;
		position: absolute;
		width: 55px;
		height: 1px;
		background-color: ${theme.colors.accent};
		left: 50%;
		bottom: -30px;
		transform: translateX(-50%);

		@media ${theme.media.mobile} {
			bottom: -24px;
		}
	}
`;
