import React, { useEffect, useState } from "react";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { S } from "./GoTopBtn_Styles";

export const GoTopBtn: React.FC = () => {
	const [showBtn, setShowBtn] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
		});
	}, []);

	return (
		<>
			{showBtn && (
				<S.GoTopBtn
					onClick={() => {
						scroll.scrollToTop();
					}}
				>
					<Icon
						iconId={"goTopBtn"}
						height={"30"}
						width={"30"}
						viewBox={"0 0 30 30"}
					/>
				</S.GoTopBtn>
			)}
		</>
	);
};
