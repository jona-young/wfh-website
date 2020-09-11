import React from "react";
import "./Sub.css";

function Sub () {
    return (
        <div className="sub">
            <div className="sub__smallBox">
                <p className="sub__contentTitle ctext">Communication is key.</p>
                <p className="sub__contentText ctext">
                    Transitioning to working from home poses a series of challenges
                    in perception of productivity, a trust in your employees, and
                    a commitment to growing
                </p>
            </div>
            <div className="sub__bigBox">
                <p className="sub__contentTitle ctext">
                    "How will I know if they are working?"...
                    "But, how do you know they are working now?"
                </p>
                <p className="sub__contentText ctext">
                    The belief that employees will not work as productively working
                    from home comes down to trust.  This is under the assumption that
                    employees are maximally productive at the traditional workplace.
                </p>
                <div className="sub__statContainer">
                    <div className="sub__statBox">
                        <span className="sub__contentNumber">$30B</span>
                        <span className="sub__contentStat ctext">saved per day for U.S. employers</span>
                    </div>
                    <div className="sub__statBox">
                        <span className="sub__contentNumber">$11K</span>
                        <span className="sub__contentStat ctext">
                                saved per year per employee working remote
                            </span>
                    </div>
                </div>
            </div>
            <div className="sub__contentLinks">
                <a href="#1" className="alink">
                    <p className="sub__linkBox ctext">
                        Flexible Schedule
                    </p>
                </a>
                <a href="#2" className="alink">
                    <p className="sub__linkBox ctext">
                        Work Abroad
                    </p>
                </a>
                <a href="#" className="alink">
                    <p className="sub__linkBox ctext">
                        Carbon Footprint
                    </p>
                </a>

            </div>
        </div>
    )
}

export default Sub;