import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Image from "gatsby-image"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
import Subscribe from "../components/subscribe"

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
  font-family: "Gunterz-Medium";
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`
const Email = styled.a`
  font-size: 1rem;
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

  const { creatorz, darius, videos, tiktok } = useStaticQuery(graphql`
    {
      creatorz: file(relativePath: { in: "IMG_5816.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tiktok: file(relativePath: { in: "tiktok-logo-4500.png" }) {
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
        <TwoColumnGrid>
          <GridLeft>
            <ImgHover fluid={creatorz.childImageSharp.fluid} />
            {/* <Names>Dare Moreno</Names> */}
          </GridLeft>
          <GridRight>
            {/* <ImgHover fluid={darius.childImageSharp.fluid} /> */}
            {/* <Names>Darius Moreno</Names> */}
            <ParagraphHeader>
              Darius and Dare Moreno are the creative duo behind Dare Dollz. The
              twin siblings grew up in Washignton D.C. before moving to New York
              City in their late teens.
            </ParagraphHeader>
          </GridRight>
        </TwoColumnGrid>
        <Paragraph>
          Darius earned a degree in illustration at Parsons The New School of
          Design and in his junior year illustrated the cover of grammy
          nominated album “At What Cost” by Goldlink which catapulted his career
          as a sought after illustrator. What sets Moreno’s work apart is his
          profound ability to infuse his artwork with the essence of black and
          Latino culture, reflecting his own experiences and heritage. His
          exceptional illustrations have graced the covers of renowned
          publications like Essence Magazine, where he skillfully captures the
          beauty of these communities. His work not only celebrates the rich
          tapestry of black and Latino culture but also challenges societal
          norms and stereotypes, paving the way for greater inclusivity and
          understanding.Through his art, Darius has become a powerful voice
          within the queer and Afro-Latino communities, using his platform to
          inspire and uplift others.
        </Paragraph>
        <Paragraph>
          Dare, on the other hand, embarked on a different artistic path, while
          studying theatre at Penn State she took creative writing courses where
          she discovered her knack for storytelling. When she relocated to New
          York in 2015, Dare ventured into the world of food and travel vlogging
          (video blogging), creating a captivating web series titled "A Girl's
          Gotta Eat!" The series brought women from various industries together
          to discuss their careers while trying out culinary delights around the
          city. Her vlog's success led her to an exploration of food in
          countries like Japan, Taiwan, and South Korea, broadening her
          professional connections and enriching her creative repertoire. Dare
          continues to use her platform to connect women in business, especially
          of color, all over the world with one another, building a community
          for support and guidance.
        </Paragraph>
        <Paragraph>
          In the summer of 2018, during a visit to their grandmother, a
          porcelain doll collector, the twins were struck by inspiration.
          Drawing from their experience in sculpting and sewing, they embarked
          on an endeavor to create their own line of dolls. The result was the
          birth of Dare Dollz. Their dolls, known for their bold and fabulous
          designs, became a sensation, attracting attention from big companies
          like Puma, who collaborated with Dare Dollz in Spring 2022.
        </Paragraph>
        <Paragraph>
          Today, Darius and Dare are based in Los Angeles, where they have
          established their own home studio. From this artistic haven, they
          continue to push boundaries and explore new realms of creativity. In
          addition to their beloved Dare Dollz, they delve into a variety of
          artistic endeavors, including comics, claymation, and other
          captivating projects.
        </Paragraph>
        {/* <Subscribe /> */}
        <Paragraph>
          <ParagraphHeader>
            For business/press inquires shoot us an email at{" "}
            <Email href="mailto:daredollz95@gmail.com">
              daredollz95@gmail.com
            </Email>
          </ParagraphHeader>
        </Paragraph>
        <CreativeWork></CreativeWork>
        <CreativeWork>
          <Header>Recent Work:</Header>
        </CreativeWork>
        <Grid>
          {videos.edges.reverse().map(curr => {
            return (
              <Product>
                <VideoLink target="_blank" to={curr.node.url}>
                  <Img fluid={curr.node.thumbnail.fluid} />
                  <Title>{curr.node.title}</Title>
                </VideoLink>
              </Product>
            )
          })}
        </Grid>
        <CreativeWork>
          <Header>Press and Clients:</Header>
          <ClientList>
            <Client>Puma</Client>
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

            <Social target="_blank" href="https://vm.tiktok.com/TTPdCbLHf2/">
              <Image fluid={tiktok.childImageSharp.fluid} />
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
