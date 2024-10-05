import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";
import React from "react";

const SocialItemsData = [
	{
		iconId: "instagram",
	},
	{
		iconId: "telegram",
	},
	{
		iconId: "vk",
	},
	{
		iconId: "linkedin",
	},
];

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<FlexWrapper direction={"column"} align={"center"}>
				<S.Name>Kirill Nazarov</S.Name>
				<S.SocialList>
					{SocialItemsData.map((s, i) => {
						return (
							<S.SocialItem key={i}>
								<S.SocialLink>
									<Icon
										height={"21"}
										width={"21"}
										viewBox={"0 0 21 21"}
										iconId={s.iconId}
									/>
								</S.SocialLink>
							</S.SocialItem>
						);
					})}
				</S.SocialList>
				<S.Copyright>© 2024 Kirill Nazarov, All Rights Reserved.</S.Copyright>
			</FlexWrapper>
		</S.Footer>
	);
};
