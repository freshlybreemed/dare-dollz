import styled from "@emotion/styled"
// import { breakpoints } from '../utils/styles'

export const GridLeftContainer = styled.div`
  padding-right: 1rem;
  width: 60.66667%;
`
export const GridRightContainer = styled.div`
  width: 30.333%;
  /* padding: 1rem; */
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
`

export const ProductDescription = styled.div`
  margin-top: 40px;
  font-family: "Helvetica", "Helvetica", sans-serif;
  font-weight: 300;
`
