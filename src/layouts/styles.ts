import styled from "@emotion/styled"

export const Container = styled.div`
  /* background-color: "#302F2F"; */
`
export const Wrapper = styled.div`
  background-color: white;
  text-align: center;
  font-family: "Gunterz";
  position: relative;
`

export const Page = styled.div`
  /* background-color: #302f2f; */
  transition: margin-left 0.5s;
  /* padding: 20px 0 20px 0; */
`

export const CartWrapper = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 100; /* Stay on top */
  top: 100; /*Stay at the top */
  right: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`

export const Mobile = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  /* top: 100; Stay at the top */
  left: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`

export const MobileLink = styled.a`
  padding: 8px 30px 8px 32px;
  font-size: 25px;
  color: black;
  display: block;
  font-weight: 700;
  text-align: left;
  transition: 0.3s;
  cursor: default;
  text-transform: uppercase;
  text-decoration: none;

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
