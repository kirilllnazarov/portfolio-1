import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.section`
	position: relative;
	background-color: ${theme.colors.priamoryBg};
	padding: 40px 0;
`;

const Name = styled.span`
	${font({
		family: '"Josefin Sans", sans-serif',
		Fmax: 22,
		Fmin: 16,
		weight: 700,
	})}
	letter-spacing: 3px;
`;

const SocialList = styled.ul`
	display: flex;
	gap: 20px;
	margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.1);
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: ${theme.animations.transition};
	color: ${theme.colors.accent};
	&:hover {
		color: ${theme.colors.priamoryBg};
		transform: translateY(-4px);
		cursor: pointer;
	}
`;

const Copyright = styled.a`
	opacity: 0.5;
	text-align: center;
	font-size: 12px;
	font-weight: 400;
`;

export const S = {
	Footer,
	Name,
	SocialList,
	SocialItem,
	SocialLink,
	Copyright,
};
