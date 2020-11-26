import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { breakpoints } from "../../utils/styles"

export const Wrapper = styled.div`
  padding-top: 2rem;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  position: relative;
`

export const Title = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: black;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px /* opacity: 0; */
    ${props =>
      props.hover &&
      css`
        opacity: 1;
      `};
`

export const PriceTag = styled.span`
  text-align: center;
  margin-top: 15px;

  :before {
    content: "- ";
  }
`
