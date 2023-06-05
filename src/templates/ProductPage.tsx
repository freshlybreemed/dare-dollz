import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import ProductForm from "../components/ProductForm"
import {
  PhotoRow,
  Img,
  ProductTitle,
  ProductDescription,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  PhotoGallery
} from "./styles"
import Navigation from "../components/Navigation"

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <SEO
        image={null}
        title={product.title}
        description={product.description}
      />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {product.images.map((image, ind) => {
              console.log("bro", image)
              return (
                // <Img fluid={image.localFile.childImageSharp.fluid} />
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  // alt={product.title}
                />
              )
            })}
            <PhotoRow>
              <PhotoGallery>
                {product.images.map((image, ind) => {
                  console.log("bro", image)
                  return <Img fluid={image.localFile.childImageSharp.fluid} />
                })}
              </PhotoGallery>
            </PhotoRow>
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
