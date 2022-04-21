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
  const Button = styled.a`
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    text-align: center;
    display: block;
    top: auto;
    left: auto;
    border-color: black;

    &:hover {
      background-color: #01ff8f;
    }
    font-size: 2.5rem;
    background-color: #9fedff;
    padding: 0.5rem 1rem;
    border-width: 0.08em;
    border-style: solid;
    @media (max-width: ${breakpoints.m}px) {
      width: 100%;
      font-size: 1.5rem;
    }

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
          The Dare Dollz live in the city of Carnado in the year 2050. Carnado
          City is an affluent city leading the way in innovative technology. As
          a result, the city consists of and attracts the wealthiest people,
          known to set lifestyle trends the average person won't ever
          experience. Xio, Paris, Chanel, and Bleu have no shortage of wealth or
          beauty. They are the archetype of Carnado City.
        </Paragraph>
        <Paragraph>
          Known as social media mavens, they constantly engage with their
          millions of followers online. Broadcasting the Carnado City lifestyle
          of enjoyable leisure days and exciting nights full of entertainment to
          all their fans. They seem to have it all, but there is more to these
          ladies and Carnado City than meets the eye. They are signed to the
          Darek Knox Agency, the most elite talent agency, where nothing and no
          one is average.
        </Paragraph>
        <Paragraph>
          The agency consists of extraordinary talent and exceptional beauty.
          Because of their "perfect" appearance, the girls are affectionately
          called "Darek's Dolls," later coining the shortened version "Dare
          Dollz." Darek Knox and his expansive team recruit the top students in
          academia, athletics, and creativity at a young age to cultivate their
          talents, making them masters of their craft.
        </Paragraph>
        <Paragraph>
          Dare Dollz can be quite the femme Fatales, a fusion of mind, muscle,
          and, to be frank, a lot of seduction. Using these characteristics
          always gets the dollz what they want. They can solve any problem for
          the right price! Just remember that Dollz are really expensive.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
export default ComicView
