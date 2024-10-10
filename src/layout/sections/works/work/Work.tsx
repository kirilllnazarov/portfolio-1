import { Link } from "../../../../components/link/Link";
import { Button } from "../../../../components/Button";
import React from "react";
import { S } from "../Works_Styles";

type WorkType = {
	title: string;
	text: string;
	src: string;
};

export const Work: React.FC<WorkType> = (props: WorkType) => {
	return (
		<S.Work>
			<S.ImageWrapper>
				<S.Image src={props.src} alt="" />
				<Button>view project</Button>
			</S.ImageWrapper>
			<S.Deskription>
				<S.Title>{props.title}</S.Title>
				<S.Text>{props.text}</S.Text>
				<Link active href={"#"}>demo</Link>
				<Link href={"#"}>code</Link>
			</S.Deskription>
		</S.Work>
	);
};
