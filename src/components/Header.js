import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Ashwin</h1>
        <p>Aspriing Software Developer</p>
    </header>
)

export default Header
