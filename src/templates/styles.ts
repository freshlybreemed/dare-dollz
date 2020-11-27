import styled from "@emotion/styled"
import { breakpoints } from '../utils/styles'
import Image from "gatsby-image"


export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  @media (max-width: ${breakpoints.m}px){
    padding: 0 1rem 0 1rem;
  }
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";

  @media (max-width: ${breakpoints.m}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const PhotoRow = styled.div`
  display: table;
`
export const PhotoGallery = styled.div`
  display: table-cell;
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
  transition: opacity 0.15s ease-in-out;
  @media (max-width: ${breakpoints.m}px) {
    max-width:60%;
    margin-left:auto;
    margin-right:auto;
  }
  
`
export const ProductContainer = styled.div`
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 1.5rem 1.3rem 1.3rem 1.5rem;
`
export const ProductTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  text-transform: uppercase;
  font-style: italic;
  font-family: "Helvetica", "Helvetica", sans-serif;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d4d4d4;
  @media (max-width: ${breakpoints.m}px){
    text-align:center;
  }
`

export const ProductDescription = styled.div`
  margin-top: 40px;
  font-family: "Helvetica", "Helvetica", sans-serif;
  font-weight: 300;
`
