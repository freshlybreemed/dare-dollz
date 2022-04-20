import React from "react"

import SEO from "../components/seo"
import ComicView from "../components/Comics/ComicView"
import styled from "@emotion/styled"
import Navigation from "../components/Navigation"
import { MainWrapper } from "../layouts/styles"

const Wrapper = styled.p`
  /* padding-top: 3rem; */
`

const ComicsPage = () => {
  return (
    <>
      <SEO title="Comics" keywords={[`gatsby`, `application`, `react`]} />
      <MainWrapper>
        <Navigation isVisable />

        <ComicView />
      </MainWrapper>
    </>
  )
}

export default ComicsPage
