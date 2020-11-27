import React, { useContext } from "react"

import { Img } from "../../utils/styles"
import StoreContext from "../../context/StoreContext"
import LineItem from "./LineItem"
import { useStaticQuery, graphql } from "gatsby"
import { endsWith } from "lodash"
import {
  HeaderWrapper,
  SubHeader,
  Subtext,
  CheckoutButton,
  SubtotalWrapper,
  CloseButton,
  Header,
  Wrapper
} from "./styles"

const Cart = ({ setCartActive, cartActive }) => {
  const { close } = useStaticQuery(graphql`
    {
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
  const {
    store: { checkout }
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))
  // console.log(close.childImageSharp.fixed)
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Shopping Cart</Header>
        <CloseButton onClick={() => setCartActive(!cartActive)}>
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 16 16"
          >
            <path d="M0 14.434l6.4-6.4-6.4-6.4L1.634 0l6.4 6.4 6.4-6.4L16 1.634l-6.4 6.4 6.4 6.4L14.434 16l-6.4-6.4-6.4 6.4z"></path>
          </svg>
        </CloseButton>
      </HeaderWrapper>
      <div>{lineItems}</div>
      <SubtotalWrapper>
        <SubHeader>Subtotal</SubHeader>
        <p>$ {checkout.subtotalPrice}</p>
      </SubtotalWrapper>
      <Subtext>Shipping & taxes calculated at checkout</Subtext>
      <CheckoutButton
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Checkout
      </CheckoutButton>
    </Wrapper>
  )
}

export default Cart
