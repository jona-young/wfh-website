import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

function Footer () {
    return (
        <div id="footer" className="footer">
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
                    <span className="footer__subscribeText">
                        Subscribe now
                    </span>
                    <input type="text" className="footer__textbox" placeholder="Subscribe..." />
                    <input type="submit" className="footer__submit" value="Sign Up" />
                </div>
                <div className="footer__socials">
                    <SocialIcon url="#footer" network="instagram" bgColor="rgb(28, 34, 66)" fgColor="rgb(222, 222, 222)" />
                    <SocialIcon url="#footer" network="facebook" bgColor="rgb(28, 34, 66)" fgColor="rgb(222, 222, 222)" />
                    <SocialIcon url="#footer" network="twitter" bgColor="rgb(28, 34, 66)" fgColor="rgb(222, 222, 222)" />
                </div>
            </div>
        </div>
    )
}

export default Footer;