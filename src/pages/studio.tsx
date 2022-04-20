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

const SubmitButton = styled.input`
  width: 40%;
  font-weight: 600;
  padding: 1rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  width: 100%;
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
  font-family: "Gunterz-Medium";

  margin-top: 2rem;
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
  /* font-size: 1.3rem; */
  line-height: 1.5;
  padding-top: 1rem;
  font-family: "Gunterz-Medium";

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
  padding-top: 3rem;
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
          Darius and Dare Moreno are the creators of Dare Dollz. The brother
          sister duo grew up in Washington D.C. before moving to NYC in their
          late teens.
        </ParagraphHeader>
        <Paragraph>
          They attended performing arts schools such as the Ellington School of
          the Arts in D.C., studying fine art, writing, and theater. Outside of
          school, the Moreno's spent most of their time creating. Whether it was
          building homes made up of shoeboxes for their toys or creating comic
          books with their friends, it was no surprise they would grow to become
          sought after creators.{" "}
        </Paragraph>
        <Paragraph>
          Darius, the youngest twin, illustrated the 2012 Christmas card for the
          Obamas before graduating high school. He then majored in illustration
          at The New School of Design, wherein his Junior year, he painted the
          cover of Goldlink's grammy nominated album At What Cost.{" "}
        </Paragraph>
        <Paragraph>
          Dare, however, was not always a visual artist. She majored in theater
          and minored in writing at Penn state. When she moved to New York in
          2015, she became a food vlogger (video blogger), creating a popular
          web series titled A Girl's Gotta Eat!. The vlog landed Moreno in
          multiple publications such as N.Y., Vice, and Office magazine. In
          addition, the exposure led to her filming episodes in various
          countries like Japan, Taiwan, and South Korea.{" "}
        </Paragraph>
        <Paragraph>
          In the summer of 2018, while visiting their grandmother, a porcelain
          doll collector, the twins got the idea to create their own dolls. They
          already had sculpting and sewing experience and used it to invent the
          flashy, bold, and fabulous characters now known as the Dare Dollz.
          Darius and Dare are now based out of Los Angeles, where they produce
          dolls, comics, claymation, and other creative projects in their home
          studio.
        </Paragraph>
        <Paragraph>
          <ParagraphHeader>
            <form>
              Subscribe
              <div>
                <SmallParagaph>Email Address</SmallParagaph>
              </div>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                name="EMAIL"
                className="required email"
              />
              <div>
                <div>
                  <SubmitButton
                    type="submit"
                    value={sent ? "Thanks" : "Subscribe"}
                    name="subscribe"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </form>
          </ParagraphHeader>
        </Paragraph>
        <Paragraph>
          <ParagraphHeader>
            To contact us feel free to shoot us an email at{" "}
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
                <g
                  id="Icon/Social/tiktok-black"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
                    id="Fill-1"
                    fill="#000000"
                  ></path>
                </g>
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
function listFields(email: any, listFields: any) {
  throw new Error("Function not implemented.")
}
