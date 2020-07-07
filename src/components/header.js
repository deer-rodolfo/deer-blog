import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
