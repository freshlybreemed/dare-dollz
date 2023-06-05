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
          Meet Demi, Paris, Chanel, and Bleu, known as Dare Dollz, the young,
          stylish social media mavens who seem to have it all, but there is more
          to these ladies than meets the eye. They are elite special agents who
          lead double lives as prominent social media influencers in the
          hyper-advanced metropolis of Carnado. Their latest mission is as
          complex as their dual identities: to capture notorious rap artist and
          criminal mastermind 8 Figga.
        </Paragraph>
        <Paragraph>
          In the race against time, the agents must use every resource, from
          advanced tech gadgets to social media prowess, to outsmart 8 Figga.
          Their struggle against him tests their loyalties, friendships, and
          individual strengths, culminating in a climactic showdown that could
          forever change the face of Carnado.
        </Paragraph>
        <Paragraph>
          "Dare Dollz: Age of Consent" is a thrilling, futuristic tale that
          fuses elements of science fiction, action, and drama, exploring themes
          of identity, technology, and the lengths one will go to uphold
          justice."Dare Dollz: Age of Consent" is a thrilling, futuristic tale
          that fuses elements of science fiction, action, and drama, exploring
          themes of identity, technology, and the lengths one will go to uphold
          justice.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
export default ComicView
