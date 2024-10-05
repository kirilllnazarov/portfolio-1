import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const DeskTopMenu: React.FC = () => {
	return (
		<S.DeskTopMenu>
			<Menu />
		</S.DeskTopMenu>
	);
};
