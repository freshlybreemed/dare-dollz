import styled from "@emotion/styled"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { breakpoints } from "../../utils/styles"

export const Wrapper = styled.div`
  padding-bottom: 3rem;
`

export const Container = styled.div`
  display: flex;
  /* padding-top: 3rem; */
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  color: black;
  /* max-width: 960px; */
`
export const Img = styled(Image)`
  max-width: 100%;
  margin: 0;
  padding: 0;
  transition: opacity 0.15s ease-in-out;
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
export const CartWrapperMobile = styled.div`
  color: black;
  font-weight: 700;
  display: none;
  line-height: 1.4;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  /* padding-top: 1rem;
  margin-top: 1rem; */
  margin-right: 30px;
  font-size: 1.25rem;
  /* transition: opacity 0.15s ease-in-out; */
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: ${breakpoints.m}px) {
    float: right;
    display: flex;
    justify-content: center;
  }
`

export const MenuLink = styled(Link)`
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  /* font-weight: 200; */
  font-family: "Gunterz-Bold";
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
  float: right;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 1rem;
  vertical-align: middle;
  @media (max-width: ${breakpoints.s}px) {
    width: 90px;
    padding-left: none;
    padding-right: 0;
  }
  @media (min-width: ${breakpoints.s}px) {
    padding-left: none;
    width: 90px;
  }
`
export const HamburgerWrapper = styled.div`
  display: flex;
  /* vertical-align:middle; */
  @media (min-width: 700px) {
    float: left;
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
