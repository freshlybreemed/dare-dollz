import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import StoreContext from "../../context/StoreContext"
import { Wrapper, Grid, Product, Title, PriceTag } from "./styles"
import { Img } from "../..//utils/styles"

const ProductGrid = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  console.log("checkout", checkout)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : "USD",
      minimumFractionDigits: 2,
      style: "currency"
    }).format(parseFloat(price ? price : 0))

  return (
    <Wrapper>
      <Grid>
        {allShopifyProduct.edges ? (
          allShopifyProduct.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
                variants: [firstVariant]
              }
            }) => (
              <Product key={id}>
                <Link to={`/product/${handle}/`}>
                  {firstImage && firstImage.localFile && (
                    <Img
                      fluid={firstImage.localFile.childImageSharp.fluid}
                      alt={handle}
                    />
                  )}
                  <Title>{title}</Title>
                </Link>
              </Product>
            )
          )
        ) : (
          <p>No Products found!</p>
        )}
      </Grid>
    </Wrapper>
  )
}

export default ProductGrid
