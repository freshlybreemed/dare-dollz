import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ContextProvider from "../provider/ContextProvider"
import logoGIF from "../images/logo.gif"
import { GlobalStyle } from "../utils/styles"
import Navigation from "../components/Navigation"
import Cart from "../components/Cart"
import { Wrapper, Page } from "./styles"
import { Mobile, MobileLink, CartWrapper } from "./styles"
const Layout = ({ children }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const [cartActive, setCartActive] = useState(false)

  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <CartWrapper style={cartActive ? { width: "50%" } : {}}>
              <Cart setCartActive={setCartActive} cartActive={cartActive} />
            </CartWrapper>
            <Page>
              <Navigation
                hamburgerActive={hamburgerActive}
                setHamburgerActive={setHamburgerActive}
                setCartActive={setCartActive}
                cartActive={cartActive}
                logo={logoGIF}
                siteTitle={data.site.siteMetadata.title}
              />
              <Mobile style={hamburgerActive ? { width: "100%" } : {}}>
                <MobileLink href="/comics">Comics</MobileLink>
                <MobileLink href="/shop">Shop</MobileLink>
                <MobileLink href="/dollz">Dollz</MobileLink>
                <MobileLink href="/studio">Studio</MobileLink>
              </Mobile>

              <Wrapper>
                {children}
                <footer></footer>
              </Wrapper>
            </Page>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
