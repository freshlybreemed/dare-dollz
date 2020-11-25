import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import ContextProvider from "~/provider/ContextProvider"
import logoGIF from "../images/logo.gif"
import { GlobalStyle } from "~/utils/styles"
import Navigation from "~/components/Navigation"
import { Wrapper, Page } from "./styles"
import { Mobile, MobileLinks } from "./styles"
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
              <MobileLinks>Comics</MobileLinks>
              <MobileLinks href="/shop">Shop</MobileLinks>
              <MobileLinks href="/studio">Studio</MobileLinks>
              <MobileLinks href="/">Dollz</MobileLinks>
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
