import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import StoreContext from '~/context/StoreContext'
import {
  CartCounter,
  Container,
  MenuLink,
  MenuLinks,
  MenuLogo,
  Wrapper,
  MenuLogoWrapper
} from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle, logo }) => {
  const [hasItems, quantity] = useQuantity()
  const {childImageSharp:  {fluid}   } = logo
  return (   
    <Wrapper>
      <Container>
        {/* <MenuLink to="/">{siteTitle}</MenuLink> */}
        <MenuLogoWrapper>

        <MenuLogo 
fluid={fluid}/>
        </MenuLogoWrapper>
        <MenuLinks>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/">Dollz</MenuLink>
        <MenuLink to="/">Vidoes</MenuLink>
        <MenuLink to="/">Comics</MenuLink>
        <MenuLink to="/">Studio</MenuLink>
        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          Cart 🛍
        </MenuLink>
        </MenuLinks>
      </Container>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
