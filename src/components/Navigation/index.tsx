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
  CartWrapper,
  MenuLogoWrapper,
  HamburgerWrapper
} from "./styles"
import { Img } from "../../utils/styles"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const useQuantity = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

interface OverlayProps {
  overlay: boolean
}
const Overlay = styled.div<OverlayProps>`
  display:  none;
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  ${props => props.overlay && css`
  display: block;

  `}
`
const Navigation = ({
  siteTitle,
  logo,
  hamburgerActive,
  setHamburgerActive,
  setCartActive,
  cartActive
}) => {
  const { cart } = useStaticQuery(graphql`
    {
      cart: file(relativePath: { in: "shopping-cart.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      close: file(relativePath: { in: "x.svg" }) {
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
          <CartWrapper >
            {hasItems && (
              <div 
                onClick={() => setCartActive(!cartActive)}
                >
                <CartCounter>{quantity}</CartCounter>{" "}
                <Img 
                  fixed={cart.childImageSharp.fixed} />
              </div>
            )}
            {/* Cart */}
          </CartWrapper>
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
        <Overlay overlay={cartActive}/>
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
