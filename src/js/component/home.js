import React from "react";

import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";

//include images into your bundle
import {element} from "prop-types";

//create your first component
export function Home() {
    const info = [
        {
            image: "https://www.dolphintrader.com/wp-content/uploads/2017/04/Triangular-Moving-Average-Forex-Trading-Strategy.png",
            imagedescription: "Moving Average Strategy",
            title: "Moving Average",
            button: "Trade Now"
        },
        {
            image: "https://th.bing.com/th/id/R.7fbeeb7c9cbe827d951decc7ebc7137b?rik=EC4ebfXbxz%2b%2fNw&riu=http%3a%2f%2fwww.forexfunction.com%2fassets%2ffiles%2frsi-simple-trading-strategy.png&ehk=8Dhd21h1EMiijF0qLq2hGaofJAyYVvIQBdG69p4mwuA%3d&risl=&pid=ImgRaw",
            imagedescription: "RSI Strategy",
            title: "RSI Indicator",
            button: "Trade Now"
        },
        {
            image: "https://www.dolphintrader.com/wp-content/uploads/2017/04/Triangular-Moving-Average-Forex-Trading-Strategy.png",
            imagedescription: "Bollinger Bands Strategy",
            title: "Bollinger Bands Strategy",
            button: "Trade Now"
        },
        {
            image: "https://www.dolphintrader.com/wp-content/uploads/2017/04/Triangular-Moving-Average-Forex-Trading-Strategy.png",
            imagedescription: "",
            title: "",
            button: "Trade Now"
        }
    ]

    return (
        <div className="container-flex" id="app">
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row" style={myStyle}>
                    {info.map((element, i) => {
                        return (
                            <Cards
                                key={i}
                                image={element.image}
                                imgdescription={element.imgdescription}
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

