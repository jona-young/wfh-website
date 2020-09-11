import React from "react";
import Main from "./General/Main.js";
import Sub from "./General/Sub.js";
import SubFlex from "./General/SubFlex.js";
import SubWork from "./General/SubWork.js";
import SubCarbon from "./General/SubCarbon.js";
import "./Content.css";

function Content () {
    return (
        <div className="content">
            <Main />
            <Sub />
            <SubFlex />
            <SubWork />
            <SubCarbon />
        </div>

    )
}

export default Content;