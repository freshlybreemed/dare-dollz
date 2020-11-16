import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <ul>
      <li>
        <Link to="">Dollz</Link>
      </li>
      <li>
        <Link to="">Music Videos</Link>
      </li>
      <li>
        <Link to="">Comic</Link>
      </li>
      <li>
        <Link to="">Studio</Link>
      </li>
      <li>
        <Link to="">Shop</Link>
      </li>
    </ul>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    ></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
