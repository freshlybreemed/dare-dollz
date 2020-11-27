import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ContextProvider from "~/provider/ContextProvider"
import logoGIF from "../images/logo.gif"
import { GlobalStyle } from "~/utils/styles"
import Navigation from "~/components/Navigation"
import { Wrapper, Page } from "./styles"
import { Mobile, MobileLink } from "./styles"
const Layout = ({ children }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false)

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
          <Page>
            <Navigation
              hamburgerActive={hamburgerActive}
              setHamburgerActive={setHamburgerActive}
              logo={logoGIF}
              siteTitle={data.site.siteMetadata.title}
            />
            <Mobile style={hamburgerActive ? { width: "100%" } : {}}>
              <MobileLink>Comics</MobileLink>
              <MobileLink href="/shop">Shop</MobileLink>
              <MobileLink href="/dollz">Dollz</MobileLink>
              <MobileLink href="/studio">Studio</MobileLink>
              <MobileLink href="/contact">Contact</MobileLink>
            </Mobile>

            <Wrapper>
              {children}
              <footer></footer>
            </Wrapper>
          </Page>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
