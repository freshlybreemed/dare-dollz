import React, { useContext, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import StoreContext from "../../context/StoreContext"
import { Wrapper, Grid, Product, Title, PriceTag } from "./styles"
import { ImgHover } from "../..//utils/styles"

const ProductGrid = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  const [highlightedProduct, setHighlightedProduct] = useState("")
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
        {[].length ? (
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
              <Product onMouseEnter={() => setHighlightedProduct(id)} key={id}>
                <Link to={`/product/${handle}/`}>
                  {firstImage && firstImage.localFile && (
                    <ImgHover
                      hover={highlightedProduct === id}
                      fluid={firstImage.localFile.childImageSharp.fluid}
                      alt={handle}
                    />
                  )}
                  <Title
                    onMouseEnter={() => setHighlightedProduct(id)}
                    hover={highlightedProduct === id}
                  >
                    {title}
                  </Title>
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
