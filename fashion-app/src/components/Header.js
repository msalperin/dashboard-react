import React from "react";
import Logo from "../assets/img/Fashion_Logo.png"


function Header(){

    return (
        <div className="header-container">
            <div className="header-logo">
                <img className="logo" src={Logo} alt="Logo"/>
            </div>

            <div className="header-titulo">
                <h1>Fashion Style - Dashboard</h1>
            </div>

        </div>
    )

}

export default Header;