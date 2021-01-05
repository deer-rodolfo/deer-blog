import { Link } from 'gatsby'
import React from 'react'
import './header.scss'

type HeaderProps = { siteTitle: string }

const Header = ({ siteTitle }: HeaderProps) => (
  <header>
    <h1 className="title">
      <Link to="/" className="title__link">
        {siteTitle}
      </Link>
    </h1>
    <nav className="nav">
      <Link to="/about" className="nav__link">
        About
      </Link>
      <Link to="/contact" className="nav__link">
        Contact
      </Link>
    </nav>
  </header>
)

export default Header
