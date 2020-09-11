import React from "react";
import "./Main.css";
import cover from "../images/cover.jpg";

function Main () {
    return (
        <div className="main">
            <div className="main__content">
                <p className="main__contentTitle">Adjusting to working from home</p>
                <p className="main__contentText">
                    Transitioning to working from home poses a series of challenges
                    in perception of productivity, a trust in your employees, and
                    a commitment to growing and evolving business practices to
                    accommodate the ability to work from home.
                </p>
            </div>
            <img className="main__img" src={cover} alt="cover" />
        </div>
    )
}

export default Main;