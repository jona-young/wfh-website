import React from "react";
import "./Header.css";

function Header () {
    return (
        <div className="header">
            <div className="header__title">
                <div className="header__titleSquare"></div>
                <div className="header__titleLogo">
                    WFH
                </div>
            </div>
            <input type="text" className="header__search" placeholder="Search.." />
            <div className="header__setLink">
                <span className="header__link">Link 1</span>
                <span className="header__link">Link 2</span>
                <span className="header__link">Link 3</span>
            </div>
        </div>
    )
}

export default Header;