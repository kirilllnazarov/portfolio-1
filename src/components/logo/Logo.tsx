import styled from "styled-components";
import { Icon } from "../icon/Icon";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

export const Logo: React.FC = () => {
	return (
		<StyledLogo
			onClick={() => {
				scroll.scrollToTop();
			}}
		>
			<Icon iconId={"code"} />
		</StyledLogo>
	);
};

const StyledLogo = styled.a`
	cursor: pointer;
`;
