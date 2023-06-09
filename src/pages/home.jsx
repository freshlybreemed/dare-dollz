import * as React from "react"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import Logo from "../icons/logo"
import { container, paddingBottomAndTop, centerImage } from "./home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
function Hero(props) {
  return <div className={container}></div>
}

export default function IndexPage({ data }) {
  const { allContentfulHomePage } = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            id
            photos {
              title
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero />
      <div className={container}>
        <div className={paddingBottomAndTop}>
          <StaticImage className={centerImage} src="../images/IMG_5785.jpg" />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Welcome to Dare Dollz" />
