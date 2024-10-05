import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

const skillData = [
	{
		iconId: "code",
		title: "html5",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet tenetur ipsa pariatur magnam illum ut ea esse inventore maiores, accusamus laudantium quibusdam architecto ex corporis eius fugiat dicta labore.",
	},
	{
		iconId: "css",
		title: "css3",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet tenetur ipsa pariatur magnam illum ut ea esse inventore maiores, accusamus laudantium quibusdam architecto ex corporis eius fugiat dicta labore.",
	},
	{
		iconId: "react",
		title: "React",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet tenetur ipsa pariatur magnam illum ut ea esse inventore maiores, accusamus laudantium quibusdam architecto ex corporis eius fugiat dicta labore.",
	},
	{
		iconId: "typeSkript",
		title: "typeskript",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet tenetur ipsa pariatur magnam illum ut ea esse inventore maiores, accusamus laudantium quibusdam architecto ex corporis eius fugiat dicta labore.",
	},
	{
		iconId: "styledComponent",
		title: "styled components",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet tenetur ipsa pariatur magnam illum ut ea esse inventore maiores, accusamus laudantium quibusdam architecto ex corporis eius fugiat dicta labore.",
	},
	{
		iconId: "figma",
		title: "figma",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eveniet tenetur ipsa pariatur magnam illum ut ea esse inventore maiores, accusamus laudantium quibusdam architecto ex corporis eius fugiat dicta labore.",
	},
];

export function Skills() {
	return (
		<S.Skills id={"skills"}>
			<Container>
				<SectionTitle>My Skils</SectionTitle>
				<FlexWrapper wrap={"wrap"} justify={"space-between"}>
					<Fade cascade={true} damping={0.2}>
						{skillData.map((s, i) => {
							return (
								<Skill
									key={i}
									iconId={s.iconId}
									title={s.iconId}
									description={s.description}
								/>
							);
						})}
					</Fade>
				</FlexWrapper>
			</Container>
		</S.Skills>
	);
}
