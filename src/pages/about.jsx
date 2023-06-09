import * as React from "react"
import { Layout } from "../components/layout"
import {
  container,
  gridLeft,
  twoColumnGrid,
  gridRight,
  coloredBox,
  paragraph,
  subHeader,
  gunnerz,
  posts,
  gridPosts,
  paddingBottomAndTop,
  client,
  clientList,
  socialsRow,
  socials,
} from "./creatorz.module.css"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
function Hero(props) {
  return <div className={container}></div>
}

export default function IndexPage({ data }) {
  const { videos } = useStaticQuery(graphql`
    {
      videos: allContentfulVideos {
        edges {
          node {
            thumbnail {
              description
              gatsbyImageData
            }
            title
            url
          }
        }
      }
    }
  `)
  console.log(videos)
  return (
    <Layout>
      <Hero />
      <div className={container}>
        <p className={coloredBox}>
          Dare Dollz began as a line of collectible dolls inspired by the grit
          and glamour of urban culture. It has since developed into a brand
          expanding into comic books and apparel.
        </p>
        <div className={paddingBottomAndTop}>
          <StaticImage src="../images/IMG_5824.jpg" />
        </div>
        <p className={coloredBox}>
          For business/press inquires shoot us an email at{" "}
          <a href="mailto: daredollz95@gmail.com"> daredollz95@gmail.com</a>
        </p>
      </div>

      {/* <StaticImage src="../images/dollbanner.png" /> */}
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}
