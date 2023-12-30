import React from "react";
import logo from "./favicon.png"
import "./Nav.css"
function Nav(){
    return(
        <div className="nav">
            <img src={logo} className="logo"/>
            <div className="title-holder">
                <p className="title">Text Swaper</p>
            </div>
        </div>
    )
}
export default Nav;