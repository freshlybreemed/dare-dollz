import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import styled from "@emotion/styled"
import logoGIF from "../images/logo.gif"

import { breakpoints, Img } from "../utils/styles"

export const Wrapper = styled.div`
  padding-top: 2rem;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

const IndexPage = () => {
  const { allContentfulHomePage } = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            id
            photos {
              fluid {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title="Dare Dollz"
        image={logoGIF}
        keywords={[`dare dollz`, `daredollz`]}
      />
      <Wrapper>
        <Img fluid={allContentfulHomePage.edges[0].node.photos[0].fluid} />

        <Grid>
          {allContentfulHomePage.edges[0].node.photos.map((curr, id) => {
            return (
              id > 0 && (
                <Product key={id}>
                  <Link to="">
                    {" "}
                    <Img
                      fluid={curr.fluid}
                      // alt={handle}
                    />
                  </Link>
                </Product>
              )
            )
          })}
        </Grid>
      </Wrapper>
    </>
  )
}

export default IndexPage
