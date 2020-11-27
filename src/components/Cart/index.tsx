import styled from '@emotion/styled'
import React, { useContext } from 'react'


import {Img} from '../../utils/styles'
import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import { useStaticQuery, graphql } from 'gatsby'
import { endsWith } from 'lodash'


const HeaderWrapper = styled.div`
  /* padding: 0 0.75rem 0.75rem 0.75rem; */
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  border-bottom: 1px solid #d4d4d4;

`

const Subtext = styled.div`
    font-size: .9rem;
    text-align: center;
    font-weight: 300;
`

const CheckoutButton = styled.button`
  padding: 1.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  width:100%;
  margin-top: 2rem;
  border: 0.0625rem solid #000;
  `

const SubtotalWrapper = styled.div`
  /* padding: 0 0.75rem 0.75rem 0.75rem; */
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  border-top: 1px solid #d4d4d4;

`

const CloseButton = styled.div`
  width:20px;
`
const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  padding-top:1.5rem;
  padding-bottom:1.5rem;
`
const Wrapper = styled.p`
  padding: 0 1rem;
`
const Header = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.4;
  /* padding-top: 1rem; */
  padding-bottom: 1rem;
  width:80%;
  margin-top: 1rem;
`

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
    store: { checkout },
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
        <CloseButton onClick={()=>setCartActive(!cartActive)} >
          <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" viewBox="0 0 16 16"><path d="M0 14.434l6.4-6.4-6.4-6.4L1.634 0l6.4 6.4 6.4-6.4L16 1.634l-6.4 6.4 6.4 6.4L14.434 16l-6.4-6.4-6.4 6.4z"></path></svg>
        </CloseButton>
      </HeaderWrapper>
      <div>

      {lineItems}
      </div>
      <SubtotalWrapper>
        <Header>Subtotal</Header>
        <p>$ {checkout.subtotalPrice}</p>
      </SubtotalWrapper>
      <Subtext>
        Shipping & taxes calculated at checkout
      </Subtext>
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
