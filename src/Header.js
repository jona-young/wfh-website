import React from "react";
import "./Header.css";

function Header () {
    return (
        <div id="home" className="header">
            <div className="header__title">
                <div className="header__titleSquare"></div>
                <a href="#home" className="header__titleLogo">
                    WFH
                </a>
            </div>
            <div className="header__setLink">
                <a href="#1" className="header__link">Flexible Schedule</a>
                <a href="#2" className="header__link">Work Abroad</a>
                <a href="#3" className="header__link">Carbon Footprint</a>
            </div>
        </div>
    )
}

export default Header;