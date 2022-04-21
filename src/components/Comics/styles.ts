import styled from "@emotion/styled"
import Image from "gatsby-image"

import { breakpoints } from "../../utils/styles"

export const Wrapper = styled.p`
  /* padding-top: 1rem; */
  padding-left: 2rem;
  padding-right: 2rem;
`
export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 2.5rem;
  padding-top: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Gunterz-Medium";
  /* padding-bottom: 1rem; */
  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
    line-height: 2rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    line-height: 2rem;
  }
`
export const ParagraphHeader = styled.p`
  background: linear-gradient(140deg, #1c24e9, #9acd32);
  /* -webkit-animation: AnimationName 59s ease infinite; */
  /* -moz-animation: AnimationName 59s ease infinite;
  -o-animation: AnimationName 59s ease infinite;
  animation: AnimationName 59s ease infinite; */
  font-size: 1.5rem;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-top: 2rem;
  padding: 2.5rem;
  /* padding-bottom:2.5rem; */
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
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  filter: none;
  &:hover {
    transition: opacity 0.15s ease-in-out;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray; /* IE 6-9 */
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Comic = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`
