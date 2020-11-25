import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grid, Comic } from "./styles"
import { Img } from "../../utils/styles"

const ComicView = () => {
  const { allContentfulComics } = useStaticQuery(
    graphql`
      query {
        allContentfulComics {
          edges {
            node {
              id
              title
              comics {
                createdAt
                fluid {
                  ...GatsbyContentfulFluid
                }
                sizes(maxWidth: 614) {
                  ...GatsbyContentfulSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <Grid>
        {allContentfulComics.edges[0].node.comics
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map(node => {
            return (
              <Comic key={node.title}>
                <Img fluid={node.fluid} />
              </Comic>
            )
          })}
      </Grid>
    </div>
  )
}
export default ComicView
