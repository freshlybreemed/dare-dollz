import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grid, Comic, Img, Wrapper, Paragraph, ParagraphHeader } from "./styles"
import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight
} from "../../utils/styles"
import { MainButton } from "../../layouts/styles"
import styled from "@emotion/styled"
const ComicView = () => {
  const { firstCover, secondCover } = useStaticQuery(
    graphql`
      query {
        firstCover: file(relativePath: { in: "IMG_0954.JPG" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
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
  const Button = styled(MainButton)`
    position: static;
  `
  return (
    <Wrapper>
      <Container>
        {/* <TwoColumnGrid> */}
        <GridLeft>
          <Img fluid={firstCover.childImageSharp.fluid} />
        </GridLeft>
        {/* <GridRight>
            <Img fluid={secondCover.fluid} />
          </GridRight> */}
        {/* </TwoColumnGrid> */}
        <Button>Download now</Button>
        <Paragraph>
          The Dare Dollz live in the city of Coronado in the year 2050. Coronado
          City is an affluent city leading the way in innovative technology. As
          a result, the city consists of and attracts the wealthiest people,
          known to set lifestyle trends the average person won't ever
          experience. Xio, Paris, Chanel, and Bleu have no shortage of wealth or
          beauty. They are the archetype of Coronado City. Known as social media
          mavens, they constantly engage with their millions of followers
          online. Broadcasting their lavish lifestyle of leisure days and
          exciting nights full of entertainment to all their fans.
        </Paragraph>
        <Paragraph>
          The Darek Knox Agency is known to be the most elite talent agency;
          nothing and no one is average. The agency consists of extraordinary
          talent and exceptional beauty. The girls are affectionately called
          "Darek's Dolls," later coining the shortened version "Dare Dollz."
          Darek Knox and his expansive team recruit the top students in
          academia, athletics, and creativity at a young age to cultivate their
          talents, making them masters of their craft. The Dare Dollz can be
          quite the femme Fatales, a fusion of mind, muscle, and, to be frank, a
          lot of seduction. Using these characteristics always gets the dollz
          what they want. They can solve any problem for the right price! Just
          remember that dollz are really expensive.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
export default ComicView
