import React from "react";
import commute from "../images/commute.jpg";
import workhome from "../images/workhome.jpg";
import dogwalk from "../images/dogwalk.png";
import "./SubFlex.css";

function SubFlex () {
    return (
        <div className="subflex">
            <div className="subflex__boxTop">
                <p className="subflex__title" id="1">Flexible Schedule.</p>
                <p className="subflex__text">
                    The average individual spends 60 minutes on the daily commute to and from
                    the workplace.  This does not take into account rush hour found in most
                    metropolitan cities.
                    <br />
                    <br />
                    By working from home, you save 300 minutes or 5 hours per week on your
                    daily commute.  This time may be spent walking the dog, hitting that
                    morning workout session, or taking the kids to the park after school.
                </p>
            </div>
            <img className="subflex__image1" src={commute} alt="commute" />
            <img className="subflex__image2" src={workhome} alt="workhome" />
            <img className="subflex__image3" src={dogwalk} alt="dogwalk" />
            <div className="subflex__boxBottom">
                <p className="subflex__text">
                    The impacts of the time spent on activities that can reduce stress, promote
                    positive mental health, and provide a better work-life balance allow your
                    employees to be happier and better able to meet their project demands.
                    <br />
                    <br />
                    Allowing your employees to work from home does not mean eliminating the need
                    to work at the head office.  It simply provides the ability for your
                    employees to handle projects and tasks that are not location-specific in an
                    environment that reduces unnecessary time spent commuting in favour of a more
                    beneficial opportunity to schedule your time.

                </p>
            </div>
        </div>
    )
}

export default SubFlex;