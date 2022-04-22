import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grid, Comic, Img, Wrapper, Paragraph, ParagraphHeader } from "./styles"
import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  breakpoints
} from "../../utils/styles"
import { MainButton } from "../../layouts/styles"
import styled from "@emotion/styled"
import Subscribe from "../subscribe"
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
        <Subscribe text="Sign up for newest Comicz" />

        <Paragraph>
          Meet Dare Dollz, the young, stylish social media mavens who hold all
          the keys to the futuristic city of Carnado. Xio, Paris, Chanel, and
          Bleu seem to have it all, but there is more to these ladies and
          Carnado City than meets the eye. The girls are signed to the Darek
          Knox Agency, the most elite talent agency, where nothing and no one is
          average. Darek Knox and his expansive team recruit the top students in
          academia, athletics, and creativity at a young age to cultivate their
          talents, making them the ultimate secret agents.
        </Paragraph>
        <Paragraph>
          Dare Dollz can be quite the femme Fatales, a fusion of mind, muscle,
          and, to be frank, a lot of seduction. Using these characteristics
          always gets the Dollz what they want. However, this is about to change
          when their latest mission involves 2050's most prominent rap artist, 8
          Figga, and his addiction to money and fame. The Dollz have to face
          their most powerful opponent while keeping up with their super famous
          alter egos.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
export default ComicView
