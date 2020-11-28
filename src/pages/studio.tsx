import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Image from "gatsby-image"

import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  breakpoints
} from "../utils/styles"
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
  font-weight: 700;
  margin-top: 2rem;
  padding: 2.5rem;
  /* padding-bottom:2.5rem; */
`
const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  padding-top: 1rem;
  /* padding-bottom: 1.5rem; */
`
const Wrapper = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
`
const Names = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.15;
  margin-top: 2rem;
  @media (max-width: ${breakpoints.m}px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`

const CreativeWork = styled.div`
  padding-top:2rem;

`
const Header = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.15;
  padding-bottom:.5rem;
  border-bottom-color:  linear-gradient(140deg, #1c24e9, #9acd32);
  border-bottom:solid;
  @media (max-width: ${breakpoints.m}px) {
    margin-top: 1rem;
    /* margin-bottom: 1rem; */
    font-size: 1.1rem;
  }
`
const ImgHover = styled(Image)`
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
  padding-top:.5rem;
  text-transform:uppercase;
  color: black;
  text-decoration:none;
  margin-top:0;
  font-size: .9rem;
  text-align: center;
`
const Description = styled.h4`
  font-weight: 400;
  padding-top:.5rem;
  text-transform:uppercase;
  margin-top:0;
  font-size: .9rem;
  text-align: center;
`
const ClientList = styled.section`
  margin-top:3rem;
  width:100%;
`
const Client = styled.a`
  font-weight: 500;
  font-size:1.2rem;
  display: inline-block;
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .25rem;
    padding-bottom: .25rem;
    cursor: default;

  &:hover {
    transition: color .15s ease-in;
    color:${['#ff4136','#f48120','#faad3f'][Math.floor(Math.random()* Math.floor(3))]};
  }
  &:active {
    transition: color .15s ease-in;
  }
`
const VideoLink = styled(Link)`

text-decoration:none;
`
const AboutPage = () => {
  const { dare, darius, videos } = useStaticQuery(graphql`
    {
      dare: file(relativePath: { in: "dare.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darius: file(relativePath: { in: "Darius.JPG" }) {
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
    <Wrapper>
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <ImgHover fluid={dare.childImageSharp.fluid} />
            <Names>Dare Moreno</Names>
          </GridLeft>
          <GridRight>
            <ImgHover fluid={darius.childImageSharp.fluid} />
            <Names>Darius Moreno</Names>
          </GridRight>
        </TwoColumnGrid>
        <ParagraphHeader>
          "Dare Dollz are stylish, provocative, pop culture influenced dolls--as
          well as a clothing line, and stop motion studio. Created by Darrion
          and Darius Moreno"
        </ParagraphHeader>
        <Paragraph>
          Dare Dollz was first established in the summer of 2018 while visiting
          our grandparents in Virginia Beach. Since then our company now located
          in Los Angeles, has grown into a creative space where we welcome
          clients, artists and collaborators.
        </Paragraph>
        <Paragraph>
          {" "}
          We provide services through our design & art studio such as
          storyboarding, character design, set design, photoshoots, and stop
          motion video shoots.{" "}
        </Paragraph>
        <Paragraph>
          Our videos & artworks have been featured in multiple publications such
          as Vice, Office Magazine, Paper, The Fader, Source, New York Mag,
          Bubblegum Club, and Redbull radio. 
        </Paragraph>
        <CreativeWork>
          <Header>Recent Work:</Header>
        </CreativeWork>
        <Grid>
          {videos.edges.map((curr)=>{
            return (
              <Product> 
                <VideoLink to={curr.node.url}>
                <Img fluid={curr.node.thumbnail.fluid}/>
                <Title>{curr.node.title}</Title>
                </VideoLink>
              </Product>
            )
          })}
        </Grid>
        <CreativeWork>
          <Header>Past Clients:</Header>
          <ClientList>
            <Client>Vice</Client>
            <Client>Office Magazine</Client>
            <Client>Paper</Client>
            <Client>The Fader</Client>
            <Client>Source</Client>
            <Client>Bubblegum Club</Client>
            <Client>Redbull radio</Client>
          </ClientList>
        </CreativeWork>
        <CreativeWork>
         <Header>Socials:</Header>

        </CreativeWork>
        <IFrame
          src="https://www.youtube.com/embed/8InS6y58Bdk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></IFrame>
      </Container>
      <SEO
        title="About"
        keywords={[`dare moreno`, `darius moreno`, `dare dollz`]}
      />
    </Wrapper>
  )
}

export default AboutPage
