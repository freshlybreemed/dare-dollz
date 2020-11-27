import React from "react"

import SEO from "../components/seo"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Container, TwoColumnGrid, GridLeft, GridRight } from "../utils/styles"

const Wrapper = styled.p`
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`
const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
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
const ComicsPage = () => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: { title: { regex: "g/Doll/" } }) {
        edges {
          node {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  console.log(allContentfulAsset)
  return (
    <>
      <SEO
        title="Dollz"
        keywords={[`dare dollz`, `dare moreno`, `darius moreno`]}
      />
      <Wrapper>
        <Container>
          <TwoColumnGrid>
            <GridLeft>
              <Img fluid={allContentfulAsset.edges[0].node.fluid} />
            </GridLeft>
            <GridRight>
              <Img fluid={allContentfulAsset.edges[2].node.fluid} />
            </GridRight>
          </TwoColumnGrid>
        </Container>
      </Wrapper>{" "}
    </>
  )
}

export default ComicsPage
