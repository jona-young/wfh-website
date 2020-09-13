import React from "react";
import carbon from "../images/carbon.jpg";
import "./SubCarbon.css";

function SubCarbon () {
    return (
        <div id="3" className="subcarbon">
            <img className="subcarbon__image" src={carbon} alt="commute" />
            <div className="subcarbon__content">
                <p className="subcarbon__title">
                    Carbon Footprint
                </p>
                <p className="subcarbon__text">
                    Providing the option to work from home allows for the lowering of employees' carbon
                    footprint with the reduction in commuter travel.  Those  with especially longer commute
                    times of one hour and longer benefit much greater in freeing their schedule from commuting,
                    lessening money spent on gas, and of course helping reduce their carbon footprint.
                    <br /><br />
                    If multiple industries around the world provide the option to work from home we may see an
                    exponential decline in carbon emissions resulting in minimizing and ultimately eliminating
                    climate change.
                </p>
            </div>

        </div>
    )
}

export default SubCarbon;