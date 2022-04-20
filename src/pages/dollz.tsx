import React from "react"

import SEO from "../components/seo"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Container, TwoColumnGrid, GridLeft, GridRight } from "../utils/styles"

const Paragraph = styled.p`
  font-size: 1.1rem;
  font-family: "Gunterz-Medium";
  line-height: 1.5;
  padding-top: 1rem;
  /* padding-bottom: 1.5rem; */
`

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
  const { dollz, box } = useStaticQuery(graphql`
    {
      box: file(relativePath: { in: "box.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dollz: allFile(filter: { relativePath: { regex: "g/doll/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(dollz)
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
              <Img fluid={dollz.edges[0].node.childImageSharp.fluid} />
              <Img fluid={dollz.edges[6].node.childImageSharp.fluid} />
              <Img fluid={dollz.edges[4].node.childImageSharp.fluid} />
            </GridLeft>
            <GridRight>
              <Img fluid={dollz.edges[1].node.childImageSharp.fluid} />
              <Img fluid={dollz.edges[3].node.childImageSharp.fluid} />
              <Img fluid={dollz.edges[5].node.childImageSharp.fluid} />
            </GridRight>
          </TwoColumnGrid>
          <Paragraph>
            Every Dare Doll is sculpted into an eye-catching work of art. Made
            up of resin, PVC, and acrylic paint, the hand-painted dolls are
            designed with attention to even the smallest detail.
          </Paragraph>
          <Paragraph>
            Every figure is created to represent and relate to trendsetters like
            you. And just like you, any and everywhere the Dare Dollz go, they
            command attention.
          </Paragraph>
          <Img fluid={box.childImageSharp.fluid} />
        </Container>
      </Wrapper>
    </>
  )
}

export default ComicsPage
