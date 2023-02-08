import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} width= "50rem" height= "60rem" alt="AC" /></span>
        <h1>Ashwin</h1>
        <p>Software Developer<br/>
        </p>
    </header>
)

export default Header
