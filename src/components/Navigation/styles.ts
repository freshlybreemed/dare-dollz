import styled from "@emotion/styled"
import { Link } from "gatsby"

import { breakpoints } from "../../utils/styles"

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  @media (max-width:${breakpoints.m}px){
    margin-bottom: .5rem;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  /* max-width: 960px; */
`

export const CartWrapper = styled.div`
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  line-height: 1.4;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding-top: 1rem;
  margin-top: 1rem;
  margin-right: 30px;
  font-size: 1.25rem;
  transition: opacity 0.15s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: ${breakpoints.s}px) {
    float: right;
    display: flex;
    justify-content: center;
  }
`

export const MenuLink = styled(Link)`
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  line-height: 1.4;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding-top: 1rem;
  margin-top: 1rem;
  margin-right: 30px;
  font-size: 1.25rem;
  transition: opacity 0.15s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: ${breakpoints.s}px) {
    float: right;
    display: flex;
    justify-content: center;
  }
`

export const MenuLogo = styled.img`
  float: left;
  padding-top: 1rem;
  padding-left: 0.6rem;
  vertical-align: middle;
  @media (max-width: ${breakpoints.s}px) {
    width: 90px;
  }
  @media (min-width: ${breakpoints.s}px) {
    width: 120px;
  }
`
export const HamburgerWrapper = styled.div`
  display: flex;
  /* vertical-align:middle; */
  @media (min-width: 700px) {
    float: right;
    display: none;
    justify-content: center;
  }
`
export const MenuLogoWrapper = styled(Link)`
  line-height: 0;
  margin: 0;
  display: inline-block;
  height: 60px;
`

export const MenuLinks = styled.div`
  float: right;
  z-index: 0;
  display: none;
  text-decoration: none;
  @media (min-width: 700px) {
    float: right;
    display: flex;
    justify-content: center;
  }
`

export const CartCounter = styled.span`
  /* color: #663399; */
  border-radius: 20px;
  padding: 0px 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
