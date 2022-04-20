import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import styled from "@emotion/styled"
import logoGIF from "../images/logo.gif"
import "../css/typography.css"
import Image from "gatsby-image"

import { breakpoints } from "../utils/styles"
import { Container, MainButton, Wrapper } from "../layouts/styles"
import { css } from "@emotion/react"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
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

const H1 = styled("h1")`
  font-size: 2.5rem;
`

const Logo = styled(Image)`
  width: 10rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`
const ImgHover = styled(Image)<{
  hover: boolean
}>`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0rem;
  transition: opacity 0.15s ease-in-out;
  ${props =>
    props.hover &&
    css`
       {
        opacity: 0.5;
      }
    `}
`
const IndexPage = () => {
  const { allContentfulHomePage, doll5, doll6, logo } = useStaticQuery(graphql`
    query {
      doll5: file(relativePath: { in: "dollstand.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doll6: file(relativePath: { in: "dollstand5.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { in: "newlogo.JPG" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      content: allContentfulHomePage {
        edges {
          node {
            id
            photos {
              title
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
    <Container>
      <SEO
        title="Dare Dollz"
        image={logoGIF}
        keywords={[`dare dollz`, `daredollz`]}
      />
      <Wrapper>
        <Logo fluid={logo.childImageSharp.fluid} />
        <MainButton href="/home">Enter</MainButton>

        <ImgHover
          fluid={doll5.childImageSharp.fluid}
          // alt={handle}
        />
        <ImgHover
          fluid={doll6.childImageSharp.fluid}
          // alt={handle}
        />
      </Wrapper>
    </Container>
  )
}

export default IndexPage
