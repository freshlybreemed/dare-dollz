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
} from "./dollz.module.css"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Subscribe from "../components/subscribe"
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
        <p className={gunnerz}>coming soon</p>
        <div className={paddingBottomAndTop}>
          <StaticImage src="../images/Box2.jpg" />
        </div>
        <Subscribe text="Be the first to know" />
      </div>

      {/* <StaticImage src="../images/dollbanner.png" /> */}
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}
