import React from "react";

import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
// import { Cards } from "./Cards";

//include images into your bundle
import PropTypes from "prop-types";
import { Content } from "./Content";

//create your first component
export function Home() {
	const info = [
		{
			image:
				"https://www.dolphintrader.com/wp-content/uploads/2017/04/Triangular-Moving-Average-Forex-Trading-Strategy.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "Moving AVG",
			button: "Trade Now"
		},
		{
			image:
				"https://th.bing.com/th/id/R.7fbeeb7c9cbe827d951decc7ebc7137b?rik=EC4ebfXbxz%2b%2fNw&riu=http%3a%2f%2fwww.forexfunction.com%2fassets%2ffiles%2frsi-simple-trading-strategy.png&ehk=8Dhd21h1EMiijF0qLq2hGaofJAyYVvIQBdG69p4mwuA%3d&risl=&pid=ImgRaw",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "RSI Indicator",
			button: "Trade Now"
		},
		{
			image:
				"https://www.dolphintrader.com/wp-content/uploads/2017/04/Triangular-Moving-Average-Forex-Trading-Strategy.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "BB Strategy",
			button: "Trade Now"
		},
		{
			image:
				"https://www.dolphintrader.com/wp-content/uploads/2017/04/Triangular-Moving-Average-Forex-Trading-Strategy.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "50 MA Strategy",
			button: "Trade Now"
		}
	];

	return (
		<div className="container-flex" id="app">
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row" style={myStyle}>
					{info.map((element, i) => {
						return (
							<Content
								key={i}
								image={element.image}
								description={element.description}
								title={element.title}
								text={element.text}
								button={element.button}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

const myStyle = {
	display: "flex",
	//flexDirection: "row",
	justifyContent: "space-between"
	//alignItems: "center"
};
