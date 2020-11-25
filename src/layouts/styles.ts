import styled from "@emotion/styled"

export const Wrapper = styled.div``

export const Page = styled.div`
  transition: margin-left 0.5s;
  padding: 20px;
`

export const Mobile = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  /* top: 100; Stay at the top */
  right: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`

export const MobileLinks = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
  &:hover {
    color: #f1f1f1;
  }
  @media screen and (max-height: 450px) {
    font-size: 18px;
  }
`
export const closeNavButton = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`
