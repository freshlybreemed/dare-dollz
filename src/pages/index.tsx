import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import styled from "@emotion/styled"
import logoGIF from "../images/logo.gif"

import { breakpoints, ImgHover } from "../utils/styles"

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

const Image = styled.img`
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
  padding-bottom: 1rem;

  @media (max-width: 1200px) {
    #photos {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 1000px) {
    #photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 800px) {
    #photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 400px) {
    #photos {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
`
const Photos = styled.section`
  /* Prevent vertical gaps */
  line-height: 0;

  -webkit-column-count: 3;
  -webkit-column-gap: 0px;
  -moz-column-count: 3;
  -moz-column-gap: 0px;
  column-count: 3;
  column-gap: 10px;
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
        <Photos>
          {allContentfulHomePage.edges[0].node.photos.map((curr, id) => {
            return (
              <Image
                src={curr.fluid.src}
                // alt={handle}
              />
            )
          })}
        </Photos>
        {/* <Img hover={false} fluid={allContentfulHomePage.edges[0].node.photos[0].fluid} />

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
        </Grid> */}
      </Wrapper>
    </>
  )
}

export default IndexPage
