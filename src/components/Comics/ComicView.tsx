import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grid, Comic, Img, Wrapper } from "./styles"
import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight
} from "../../utils/styles"
const ComicView = () => {
  const { firstCover, secondCover } = useStaticQuery(
    graphql`
      query {
        firstCover: contentfulAsset(title: { regex: "g/Issue 1 Front/" }) {
          id
          title
          createdAt
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        secondCover: contentfulAsset(title: { regex: "g/Issue 1/" }) {
          id
          title
          createdAt
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    `
  )
  console.log(firstCover)
  return (
    <Wrapper>
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <Img fluid={firstCover.fluid} />
          </GridLeft>
          <GridRight>
            <Img fluid={secondCover.fluid} />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </Wrapper>
  )
}
export default ComicView
