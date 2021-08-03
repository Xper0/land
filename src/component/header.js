import React from 'react';
import "./header.css";
import imgUrl from "../img/header.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',

    };

    return (

        <div className="header-container" style={divStyle} >
            <h1 className="header-container-text">There is no other platforms for you as like </h1>
            <FontAwesomeIcon icon={faPlayCircle} size="3x" color="#323969"/>
            <button className="header-container-text-btn">Try now</button>
            <p className="header-container-text-p">* No need to add cards details</p>
        </div>
    );
}

export default Header;