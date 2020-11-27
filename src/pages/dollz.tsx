import React from "react"

import SEO from "../components/seo"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Container, TwoColumnGrid, GridLeft, GridRight } from "../utils/styles"

const Paragraph = styled.p`
  font-size: 1.1rem;
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
          <Paragraph>
            The idea for Dare Dollz started on a bored afternoon while visiting
            our grandparents. Our grandma who collects dolls always encouraged
            us to make our own sets and accessories as kids for our toys. We
            decided that we wanted dolls that looked exactly like us or more
            like who we wanted to be. Then we created this universe very similar
            to our own. Where everyone was vibrant, moody, and fly. Thus Dare
            Dollz was born.
          </Paragraph>
          <Paragraph>
            Centered around a group of smart, fashionable, and highly trained
            women working for an undercover detective agency in Carnado city.
            You will be able to join this universe very soon. Keep checking in.
          </Paragraph>
        </Container>
      </Wrapper>
    </>
  )
}

export default ComicsPage
