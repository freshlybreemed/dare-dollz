import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import ContextProvider from "~/provider/ContextProvider"
import logoGIF from "../images/logo.gif"
import { GlobalStyle } from "~/utils/styles"
import Navigation from "~/components/Navigation"

const Wrapper = styled.div`
  margin: 0 auto x
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Page = styled.div``
const Layout = ({ children }) => {
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
              logo={logoGIF}
              siteTitle={data.site.siteMetadata.title}
            />
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
  children: PropTypes.node.isRequired,
}

export default Layout
