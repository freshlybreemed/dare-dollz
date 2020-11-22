import React, { useContext, useState } from "react"
import reduce from "lodash/reduce"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./hamburgers.min.css"

import StoreContext from "~/context/StoreContext"
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

const useQuantity = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle, logo }) => {
  const [hasItems, quantity] = useQuantity()
  const [hamburgerActive, setHamburgerActive] = useState(false)
  return (
    <Wrapper>
      <Container>
        {/* <MenuLink to="/">{siteTitle}</MenuLink> */}
        <MenuLogoWrapper to="/">
          <MenuLogo src={logo} />
        </MenuLogoWrapper>
        <MenuLinks>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/">Dollz</MenuLink>
          <MenuLink to="/">Vidoes</MenuLink>
          <MenuLink to="/comics">Comics</MenuLink>
          <MenuLink to="/">Studio</MenuLink>
          <MenuLink to="/cart">
            {hasItems && <CartCounter>{quantity}</CartCounter>}
            Cart 🛍
          </MenuLink>
        </MenuLinks>
        <HamburgerWrapper>
          <button
            onClick={() => setHamburgerActive(!hamburgerActive)}
            class={`hamburger hamburger--collapse ${classnames({
              "is-active": hamburgerActive
            })}`}
            style={{ outline: "none", padding: "none" }}
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
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
