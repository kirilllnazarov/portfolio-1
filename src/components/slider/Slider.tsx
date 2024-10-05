import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../styles/slider.css"
import { S } from "./Slider_Styles";

type SlideType = {
	text: string;
	userName: string;
};

const Slide = (props: SlideType) => {
	return (
		<S.Slide>
			<S.Text>{props.text}</S.Text>
			<S.Name>@{props.userName}</S.Name>
		</S.Slide>
	);
};

const items = [
	<Slide
		text={
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		}
		userName={"kirilllnazarov"}
	/>,
	<Slide
		text={
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		}
		userName={"nazarov"}
	/>,
	<Slide
		text={
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		}
		userName={"kirill "}
	/>,
];

export const Slider = () => (
	<S.Slider>
		<AliceCarousel mouseTracking items={items} />
	</S.Slider>
);