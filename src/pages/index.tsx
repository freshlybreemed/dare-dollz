import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ImageGallery from "../components/image-gallery"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="mt3 pt4">
        <h1 className="tc">Welcome to Dare Dollz</h1>
      </div>
      <ImageGallery images={data.masks.edges} />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    masks: allFile(filter: { relativePath: { regex: "/masks/" } }, limit: 10) {
      edges {
        node {
          id
          childImageSharp {
            id
            fluid(
              maxWidth: 200
              quality: 70
              traceSVG: { background: "#fbfafc", color: "#dbd4e2" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`

export default IndexPage
