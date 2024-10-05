import React from "react";
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconType = {
	iconId: string;
	width?: string;
	height?: string;
	viewBox?: string;
};

export const Icon: React.FC<IconType> = (props: IconType) => {
	return (
		<svg
			width={props.width || "50"}
			height={props.height || "50"}
			viewBox={props.viewBox || "0 0 50 50"}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</svg>
	);
};
