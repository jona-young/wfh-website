import React from "react";
import "./Footer.css";

function Footer () {
    return (
        <div className="footer">
            <div className="footer__top">
                <a href="#home" className="footer__links">Home</a>
                |
                <a href="#1" className="footer__links">Flexible Schedule</a>
                |
                <a href="#2" className="footer__links">Work Abroad</a>
                |
                <a href="#3" className="footer__links">Carbon Footprint</a>
            </div>
            <div className="footer__bottom">
                <div className="footer__subscribe">
                    Text box to subscribe
                </div>
                <div className="footer__socials">

                </div>
            </div>
        </div>
    )
}

export default Footer;