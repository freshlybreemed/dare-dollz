import React from "react"

import SEO from "../components/seo"
import ComicView from "../components/Comics/ComicView"
import styled from "@emotion/styled"

const Wrapper = styled.p`
  padding-top: 3rem;
`

const ComicsPage = () => {
  return (
    <>
      <SEO title="Comics" keywords={[`gatsby`, `application`, `react`]} />
      <Wrapper>
        <ComicView />
      </Wrapper>
    </>
  )
}

export default ComicsPage
