import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// menu
const MenuItem = styled.li`
	position: relative;
	transition: ${theme.animations.transition};
`;

const Mask = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow: hidden;
	color: ${theme.colors.accent};

	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
`;

const NavLink = styled(Link)`
	font-family: "Josefin Sans", sans-serif;
	font-size: 30px;
	font-weight: 400;
	text-align: center;
	color: transparent;
	cursor: pointer;

	&::before {
		content: "";
		display: inline-block;
		height: 3px;
		background-color: ${theme.colors.accent};
		position: absolute;
		top: 50%;
		left: -10px;
		right: -10px;
		z-index: 1;
		transform: scale(0);
		transition: ${theme.animations.transition};
	}

	&:hover,
	&.active {
		&::before {
			transform: scale(1);
		}
		${Mask} {
			transform: skewX(12deg) translateX(5px);
			color: ${theme.colors.font};
			& + ${Mask} {
				transform: skewX(12deg) translateX(-5px);
			}
		}
	}
`;

// mobile menu
const MobileMenu = styled.nav``;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
	position: fixed;
	background-color: rgba(31, 31, 32, 0.9);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-100%);
	transition: 0.6s ease-in-out;

	ul {
		display: flex;
		gap: 10px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: ${theme.animations.transition};
	}

	${(props) =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			transform: translateY(0);
			& ul {
				gap: 30px;
			}
		`}
`;

const BurgerButton = styled.div<{ isOpen: boolean }>`
	position: fixed;
	width: 200px;
	height: 200px;
	top: -100px;
	right: -100px;
	z-index: 99999;

	& span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		left: 40px;
		bottom: 50px;

		${(props) =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: "";
			display: block;
			width: 36px;
			height: 2px;
			background-color: ${theme.colors.font};
			position: absolute;
			transform: translateY(-10px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(-45deg) translateY(0);
				`}
		}
		&::after {
			content: "";
			display: block;
			width: 24px;
			height: 2px;
			background-color: ${theme.colors.font};
			position: absolute;
			transform: translateY(10px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					width: 36px;
					transform: rotate(45deg) translateY(0);
				`}
		}
	}
`;

//decktop menu
const DeskTopMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}
`;

export const S = {
	NavLink,
	Mask,
	MenuItem,
	MobileMenu,
	MobileMenuPopUp,
	BurgerButton,
	DeskTopMenu,
};
