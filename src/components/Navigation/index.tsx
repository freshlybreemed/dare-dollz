import React, { useContext, useState } from "react"
import reduce from "lodash/reduce"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./hamburgers.min.css"

import StoreContext from "../../context/StoreContext"
import {
  CartCounter,
  Container,
  MenuLink,
  MenuLinks,
  MenuLogo,
  Wrapper,
  MenuLogoWrapper,
  HamburgerWrapper
} from "./styles"
import { Img } from "../../utils/styles"
import { useStaticQuery, graphql } from "gatsby"

const useQuantity = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({
  siteTitle,
  logo,
  hamburgerActive,
  setHamburgerActive
}) => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { in: "shopping-cart.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <Container>
        <MenuLogoWrapper to="/">
          <MenuLogo alt="logo" src={logo} />
        </MenuLogoWrapper>
        <MenuLinks>
          <MenuLink to="/dollz">Dollz</MenuLink>
          <MenuLink to="/shop">Shop</MenuLink>
          <MenuLink to="/comics">Comics</MenuLink>
          <MenuLink to="/studio">Studio</MenuLink>
          <MenuLink to="/cart">
            {hasItems && (
              <>
                <CartCounter>{quantity}</CartCounter>{" "}
                <Img fixed={file.childImageSharp.fixed} />
              </>
            )}
            {/* Cart */}
          </MenuLink>
        </MenuLinks>
        <HamburgerWrapper>
          <button
            aria-label="menu"
            onClick={() => setHamburgerActive(!hamburgerActive)}
            className={`hamburger hamburger--collapse ${classnames({
              "is-active": hamburgerActive
            })}`}
            style={{ outline: "none", padding: "none" }}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </HamburgerWrapper>
      </Container>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string
}

Navigation.defaultProps = {
  siteTitle: ``
}

export default Navigation
