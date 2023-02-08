import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} width= "200rem" height= "200rem" alt="AC" /></span>
        <h1>Ashwin</h1>
        <p>Software Developer<br/>
        </p>
    </header>
)

export default Header
