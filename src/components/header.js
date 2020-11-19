import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Logo = styled(`a`)`
  max-width: 25%;
  float: left;
  display: block;
  padding: 10px;
`

const Menu = styled(`ul`)`
  display: none;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  padding-top: 1rem;
  margin-top: 1rem;
  max-width: 75%;
  @media (min-width: 700px) {
    float: right;
    display: flex;
    justify-content: center;
  }
`

const Hamburger = styled(`p`)`
  display: none;
  padding-top: 1rem;
  margin-top: 1rem;
  margin-right 0.5rem;
  @media (max-width: 700px) {
    display: flex;
    float: right;
  }
`
const Header = () => (
  <header className="h2 mv3">
    <Menu>
      <li className="inline-flex mr4">
        <Link className="no-underline black" to="">
          Dollz
        </Link>
      </li>
      <li className="inline-flex mr4 tc">
        <Link className="no-underline black" to="/music-videos">
          Videos
        </Link>
      </li>
      <li className="inline-flex mr4">
        <Link className="no-underline black" to="">
          Comic
        </Link>
      </li>
      <li className="inline-flex mr4">
        <Link className="no-underline black" to="">
          Studio
        </Link>
      </li>
      <li className="inline-flex mr4">
        <Link className="no-underline black" to="">
          Shop
        </Link>
      </li>
    </Menu>
    <Hamburger>Bro</Hamburger>
    <Logo>
      <img
        className="w-auto v-top h4"
        src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/107805819_1618135975008618_6871536287947456080_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=jqGke2Vgv-8AX-J0zaJ&_nc_ht=scontent-iad3-1.xx&oh=67ca6f78889def9af017274ee3d054c8&oe=5FDA4176"
      />
    </Logo>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
