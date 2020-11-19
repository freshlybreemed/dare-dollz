/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { mq, gutter, offset, offsetXxl } from "../utils/presets"
import styled from "styled-components"

import Header from "./header"
import "./tachyons.min.css"

const Container = styled(`div`)`
  margin-top: calc(67vh - ${gutter.default});
  padding: ${gutter.default};
  ${mq.tablet} {
    margin-left: ${offset};
    margin-top: 0;
    max-width: 37.5rem;
    padding: ${gutter.tablet};
    position: relative;
  }
  ${mq.desktop} {
    padding: ${gutter.desktop};
    padding-top: ${gutter.tablet};
  }
  ${mq.xxl} {
    margin-left: ${offsetXxl};
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
