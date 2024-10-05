import styled from "styled-components";
import { Link } from "../../../../components/link/Link";

type TabMenuType = {
	tabsItems: Array<{title: string, status: "all" | "landing" | "react" | "spa"}>
	changeFilterStatus: (value: "all" | "landing" | "react" | "spa") => void
	currentFilterStatus: string
};

export function TabMenu(props: TabMenuType) {
	return (
		<StyledTabMenu>
			<ul>
				{props.tabsItems.map((item, i) => {
					return (
						<li key={i}>
							<Link active={props.currentFilterStatus === item.status} as={'button'} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</StyledTabMenu>
	);
}

const StyledTabMenu = styled.nav`
	ul {
		display: flex;
		justify-content: space-between;
		max-width: 352px;
		width: 100%;
		margin: 0 auto 40px;
	}
`;
