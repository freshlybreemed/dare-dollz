import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import ProductForm from "../components/ProductForm"
import {
  PhotoRow,
  Img,
  photoGallery,
  ProductTitle,
  ProductDescription,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight
} from "./styles"

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
          <Img
            fluid={product.images[0].localFile.childImageSharp.fluid}
            alt={product.title}
            />
          <PhotoRow>
            {product.images.map((image,ind) =>  {
              return (
              <Img fluid={image.localFile.childImageSharp.fluid} />
              )
            })}
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
      {/* <ProductContainer>
        <GridLeftContainer>
        </GridLeftContainer>
        <GridRightContainer>
        </GridRightContainer>
      </ProductContainer> */}
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
