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

const Email = styled.a`
  /* font-size: 1.3rem; */
  line-height: 1.5;
  padding-top: 1rem;
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
  /* padding-bottom: 1.5rem; */
`

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
`

const Names = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
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
        <Paragraph>
          <ParagraphHeader>
          To contact us feel free to shoot us an email at{' '} 
            <Email href="mailto:daredollz95@gmail.com">
              daredollz95@gmail.com
            </Email>
            </ParagraphHeader>
        </Paragraph>
        <CreativeWork>
        </CreativeWork>
        <CreativeWork>
          <Header>Recent Work:</Header>
        </CreativeWork>
        <Grid>
          {videos.edges.map(curr => {
            return (
              <Product>
                <VideoLink to={curr.node.url}>
                  <Img fluid={curr.node.thumbnail.fluid} />
                  <Title>{curr.node.title}</Title>
                </VideoLink>
              </Product>
            )
          })}
        </Grid>
        <CreativeWork>
          <Header>Press + Past Clients:</Header>
          <ClientList>
            <Client>Vice</Client>
            <Client>Office Magazine</Client>
            <Client>Paper</Client>
            <Client>The Fader</Client>
            <Client>Source</Client>
            <Client>Bubblegum Club</Client>
            <Client>Redbull Radio</Client>
            <Client>EverPress</Client>
            <Client>Naveszn</Client>
          </ClientList>
        </CreativeWork>
        <CreativeWork>
          <Header>Socials:</Header>
          <SocialsRow>
            <Social target="_blank" href="https://www.facebook.com/Daredollz/">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path
                  d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                  fill-rule="nonzero"
                />
              </svg>
            </Social>
            <Social target="_blank" href="https://www.instagram.com/daredollz/">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
              </svg>
            </Social>
            <Social
              target="_blank"
              href="https://www.youtube.com/channel/UCn1en9e5r3z6q3DWe9T0oFA"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z" />
              </svg>
            </Social>
            <Social target="_blank" href="https://twitter.com/daredollz">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path
                  d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
                  fill-rule="nonzero"
                />
              </svg>
            </Social>
          </SocialsRow>
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
