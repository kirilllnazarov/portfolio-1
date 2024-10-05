import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "../skills/Skills_Styles";
import React from "react";

export const Testimony: React.FC = () => {
	return (
		<StyledTestimony id={'testimony'}>
			<Container>
				<SectionTitle>StyledTestimony</SectionTitle>
				<FlexWrapper direction={"column"} align={"center"}>
					<S.IconWrapper>
						<Icon iconId={"quote"} />
					</S.IconWrapper>
					<Slider />
				</FlexWrapper>
			</Container>
		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`
	position: relative;
	min-height: 50vh;
	background-color: #8b4fb3;
	${S.IconWrapper} {
		margin: 40px 0 72px;
	}
`;
