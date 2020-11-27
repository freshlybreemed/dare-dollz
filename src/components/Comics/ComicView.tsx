import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grid, Comic, Img, Wrapper, Paragraph, ParagraphHeader } from "./styles"
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
        {/* <ParagraphHeader></ParagraphHeader> */}
        <Paragraph>
          The Fabulous life of Dare Dollz follows the crime-fighting adventures
          of four young fashionable women working for a private detective agency
          in Carnado City.
        </Paragraph>
        <Paragraph>
          Things start to heat up for the girls when a new trap rapper 8 Figga
          rises in popularity. His influence on the youth is causing crimes to
          rise in the city that they are paid to protect. And two things the
          dollz don’t play about is their city or their money.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
export default ComicView
