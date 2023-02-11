import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} width = "200rem" height = "200rem" alt="Logo" /></span>
        <h1>Ashwin</h1>
        <p>Aspring Software Developer</p>
    </header>
)

export default Header
