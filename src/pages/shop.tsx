import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import styled from "@emotion/styled"
import { breakpoints } from "../utils/styles"

export const Wrapper = styled.div`
  padding-top: 2rem;
`
const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 2rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  filter: none;
  &:hover {
    transition: opacity 0.15s ease-in-out;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray; /* IE 6-9 */
  }
`
const ComingSoon = styled.div`
  font-size: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  @media (max-width: ${breakpoints.m}px) {
    /* width: 90px; */
    margin-top: 2rem;
    padding-top: 2rem;
  }
`
const IndexPage = () => {
  const { dollz } = useStaticQuery(graphql`
    {
      dollz: file(relativePath: { regex: "g/box/" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Dare Dollz" keywords={[`dare dollz`, `daredollz`]} />
      <Wrapper>
        {/* <ProductGrid /> */}
        <ComingSoon>
          Coming Soon
          <Img fluid={dollz.childImageSharp.fluid} />
        </ComingSoon>
      </Wrapper>
    </>
  )
}

export default IndexPage
