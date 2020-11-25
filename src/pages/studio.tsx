import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import SEO from "../components/seo"

import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight
} from "../utils/styles"

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`
const Wrapper = styled.p`
  padding-top: 3rem;
`
const Header = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.15;
  margin-top: 2rem;
`
const AboutPage = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { in: "founders.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <Img fluid={file.childImageSharp.fluid} />
            <Img fluid={file.childImageSharp.fluid} />
          </GridLeft>
          <GridRight>
            <Header>Darius Moreno</Header>
            <Paragraph>
              Darius is an L.A. based artist who works in 2D and 3D mediums,
              predominately sculpture and paintings. His work is inspired by the
              grit of hip hop culture. This is evident when before he received
              his degree in illustration at The New School for design he had
              already directed the artwork for Goldlink’s Grammy nominated album
              At What Cost. Darius continues to grow as an artist and creative
              while gaining business relationships with major distributions such
              as RCA records, Defjam, and Columbia records, to name a few. In
              2018, Darius collaborated with Converse for a partnership with one
              star. Darius also partnered with ASOS x GLAAD to do a painting for
              there 2018 pride campaign. In 2019, Darius painted a promotional
              piece for the rerelease of Miles Davis’s Birth of The Cool, while
              partnering with Apple to teach a class on Pro create. Currently
              Darius is focused on his new doll company Dare Dollz inc. with his
              sister Dare Moreno.
            </Paragraph>
            <Header>Dare Moreno</Header>
            <Paragraph>
              Dare Moreno is an L.A. based based actor, filmmaker, art director,
              and entrepreneur. Moreno is best known for her food and travel
              series A Girl’s Gotta Eat! and the co-creation of the fashion doll
              company Dare Dollz. Her production company however titled A Daring
              Film has produced various projects for artists such as Goldlink,
              Sebastian Mikael, and alem worldwide. She is also credited as a
              writer and director on every project. Moreno gave her first on
              screen performance in the indie film “April Again” released on
              Amazon prime earlier this year and on HBO’s swiped. Her eclectic
              style has landed her in publications such as Office magazine,
              Vice, New York mag, The Source, and Mefeater. Now Dare is focused
              more than ever on Dare Dollz the company she shares with her twin
              brother Darius Moreno.
            </Paragraph>
          </GridRight>
        </TwoColumnGrid>
      </Container>
      <SEO
        title="About"
        keywords={[`dare moreno`, `darius moreno`, `dare dollz`]}
      />
    </Wrapper>
  )
}

export default AboutPage
