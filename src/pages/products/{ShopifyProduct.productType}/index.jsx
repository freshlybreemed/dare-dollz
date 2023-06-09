import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import { title } from "../index.module.css"

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  return (
    <Layout>
      <h1 className={title}>{productType}</h1>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?p=${slugify(productType)}#more`}>
          More Products
        </MoreButton>
      )}
    </Layout>
  )
}

export const Head = ({ pageContext: { productType } }) => (
  <Seo title={`Shop Dare Dollz`} />
)

export const query = graphql`
  query ($productType: String!) {
    products: allShopifyProduct(
      sort: { publishedAt: ASC }
      filter: { productType: { eq: $productType } }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
