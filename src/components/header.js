import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <h1>Goal Canada</h1>
      <ul>
        <li><Link className={headerStyles.link} to="/">Home</Link></li>
        <li><Link className={headerStyles.link} to="/about">About</Link></li>
        <li><Link className={headerStyles.link} to="/services">Services</Link></li>
        <li><Link className={headerStyles.link} to="/blog">Blog</Link></li>
        <li><Link className={headerStyles.link} to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header
