import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Image from "gatsby-image"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Subscribe from "../components/subscribe"

import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  breakpoints,
  ImgHover
} from "../utils/styles"
import Navigation from "../components/Navigation"
import { MainWrapper } from "../layouts/styles"

const SubmitButton = styled.input`
  /* width: 40%; */
  font-weight: 600;
  padding: 0.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  /* width: 100%; */
  /* margin-top: 0rem; */
  border: 0.0625rem solid #000;
  /* height: 30px; */
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`
const ParagraphHeader = styled.p`
  background: linear-gradient(140deg, #1c24e9, #9acd32);
  /* -webkit-animation: AnimationName 59s ease infinite; */
  /* -moz-animation: AnimationName 59s ease infinite;
  -o-animation: AnimationName 59s ease infinite;
  animation: AnimationName 59s ease infinite; */
  font-size: 1.5rem;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
  font-family: "Gunterz-Medium";

  /* margin-top: 2rem; */
  padding: 2.5rem;
  /* padding-bottom:2.5rem; */
`
const Input = styled.input`
  width: 40%;
  padding: 0.4rem;
  font-family: "Helvetica";
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`
const Email = styled.a`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 1rem;
  display: block;
  /* display: block; */
  /* color: black; */
  font-weight: 700;
  /* text-decoration: none; */
  text-align: center;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  padding-top: 1rem;
  font-family: "Gunterz-Medium";
  /* padding-bottom: 1.5rem; */
`
const SmallParagaph = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  padding-top: 1rem;
  font-family: "Gunterz-Medium";
  /* padding-bottom: 1.5rem; */
`

const Wrapper = styled.div`
  /* padding-top: 3rem; */
  padding-left: 2rem;
  padding-right: 2rem;
  /* background-color: black; */
`

const Names = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  font-family: "Gunterz-Medium-Italic";

  text-transform: uppercase;
  line-height: 1.15;
  margin-top: 2rem;
  @media (max-width: ${breakpoints.m}px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`

const CreativeWork = styled.div`
  padding-top: 2rem;
`

const Header = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
  line-height: 1.15;
  padding-bottom: 0.5rem;
  border-bottom-color: linear-gradient(140deg, #1c24e9, #9acd32);
  border-bottom: solid;
  @media (max-width: ${breakpoints.m}px) {
    margin-top: 1rem;
    /* margin-bottom: 1rem; */
    font-size: 1.1rem;
  }
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
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  filter: none;
`

const IFrame = styled.iframe`
  margin-top: 2rem;
  width: 100%;
  height: 400px;

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 180px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 325px;
  }
`

const Grid = styled.div`
  padding-top: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

const Title = styled.h4`
  font-weight: 600;
  color: white;

  padding-top: 0.5rem;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  margin-top: 0;
  font-size: 0.9rem;
  text-align: center;
`

const Description = styled.h4`
  font-weight: 400;
  padding-top: 0.5rem;
  text-transform: uppercase;
  margin-top: 0;
  font-size: 0.9rem;
  text-align: center;
`

const ClientList = styled.section`
  margin-top: 3rem;
  width: 100%;
`

const Client = styled.a`
  font-weight: 500;
  font-size: 1.2rem;
  color: black;
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  cursor: default;

  &:hover {
    transition: color 0.15s ease-in;
    color: ${["#ff4136", "#f48120", "#faad3f"][
      Math.floor(Math.random() * Math.floor(3))
    ]};
  }
  &:active {
    transition: color 0.15s ease-in;
  }
`

const VideoLink = styled(Link)`
  text-decoration: none;
`

const SocialsRow = styled.section`
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 2rem;
`

const Social = styled.a`
  display: inline-block;
  color: black;
  height: 2rem;
  width: 2rem;
  margin-right: 2rem;
`

const AboutPage = () => {
  const [email, setEmail] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)

  const handleSubmit = e => {
    console.log("peace")
    e.preventDefault()
    setSent(true)
    addToMailchimp(email, { source: "Website" }, null)
      .then(data => {
        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const { creatorz, darius, videos } = useStaticQuery(graphql`
    {
      creatorz: file(relativePath: { in: "headgrid.JPG" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darius: file(relativePath: { in: "Darius.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      videos: allContentfulVideos {
        edges {
          node {
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_noBase64
              }
              description
            }
            title
            url
          }
        }
      }
    }
  `)
  return (
    <MainWrapper>
      <Navigation isVisable />
      <Container>
        <ParagraphHeader>
          Dare Dollz began as a graphic novel inspired by the grit and glamour
          of urban culture. It has since developed into a brand expanding into
          collectible dolls and apparel.
        </ParagraphHeader>
        <ImgHover fluid={creatorz.childImageSharp.fluid} />
        {/* </GridRight>
        </TwoColumnGrid> */}

        <Paragraph>
          <ParagraphHeader>
            For business/press inquires shoot us an email at:{" "}
            <Email href="mailto:daredollz95@gmail.com">
              daredollz95@gmail.com
            </Email>
          </ParagraphHeader>
        </Paragraph>
      </Container>
      <SEO
        title="About"
        keywords={[`dare moreno`, `darius moreno`, `dare dollz`]}
      />
    </MainWrapper>
  )
}

export default AboutPage
function listFields(email: any, listFields: any) {
  throw new Error("Function not implemented.")
}
