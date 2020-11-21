import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import ProductForm from '../components/ProductForm'
import {
  Img,

} from '../utils/styles'
import { ProductTitle, ProductDescription, ProductContainer, GridLeftContainer, GridRightContainer } from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  console.log(product)
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <ProductContainer>
        <GridLeftContainer>
        {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
         
        </GridLeftContainer>
        <GridRightContainer>
        <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
         
        </GridRightContainer>
      </ProductContainer>
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
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
