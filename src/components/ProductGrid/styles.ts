import styled from "@emotion/styled"

import { breakpoints } from "../../utils/styles"

export const Wrapper = styled.div`
  padding-top: 2rem;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
`

export const PriceTag = styled.span`
  text-align: center;
  margin-top: 15px;

  :before {
    content: "- ";
  }
`