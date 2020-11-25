import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 2rem;
`

const IndexPage = () => (
  <>
    <SEO title="Dare Dollz" keywords={[`dare dollz`, `daredollz`]} />
    <Wrapper>
      <ProductGrid />
    </Wrapper>
  </>
)

export default IndexPage
