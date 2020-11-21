import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Dare Dollz" keywords={[`dare dollz`, `daredollz`]} />
    <ProductGrid />
  </>
)

export default IndexPage
