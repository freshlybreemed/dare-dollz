import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: "Gunterz";
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)

interface ImgHoverProps {
  hover: boolean
}

export const H2 = styled("h2")``

export const ImgHover = styled(Image)<ImgHoverProps>`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0rem;
  transition: opacity 0.15s ease-in-out;
  ${props =>
    props.hover &&
    css`
       {
        opacity: 0.5;
      }
    `}
`
export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  transition: opacity 0.15s ease-in-out;
`
const SubmitButton = styled.input`
  /* width: 40%; */
  font-weight: 600;
  padding: 0.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  /* width: 100%; */
  /* margin-top: 0rem; */
  border: 0.0625rem solid #000;
  /* height: 30px; */
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`
export const Input = styled.input`
  width: 40%;
  padding: 0.4rem;
  font-family: "Helvetica";
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`
export const Email = styled.a`
  /* font-size: 1.3rem; */
  line-height: 1.5;
  padding-top: 1rem;

  /* display: block; */
  /* color: black; */
  font-weight: 700;
  /* text-decoration: none; */
  text-align: center;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 3rem;
`

export const TwoColumnGrid = styled.div`
  /* padding-top: 3rem; */
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";

  @media (max-width: ${breakpoints.s}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
