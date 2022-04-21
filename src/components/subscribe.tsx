import React, { useState } from "react"
import { breakpoints } from "../utils/styles"
import { Paragraph, ParagraphHeader } from "./Comics/styles"
import styled from "@emotion/styled"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { MainButtonStatic } from "../layouts/styles"

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
    width: 94%;
  }
`
const FlexDiv = styled.div`
  display: flex;
  margin-top: 1rem;
  @media (max-width: ${breakpoints.m}px) {
    display: block;
    /* width: 94%; */
    font-size: 1.5rem;
  }
`
const Input = styled.input`
  /* width: 40%; */
  padding: 0.4rem;
  font-family: "Gunterz-Medium";
  display: inline-block;
  flex-grow: 1;
  @media (max-width: ${breakpoints.m}px) {
    display: block;
    /* margin-left: auto;
    margin-right: auto; */
    width: 90%;
  }
`
const Subscribe = ({ text }: { text?: string }) => {
  const [email, setEmail] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)

  const handleSubmit = e => {
    console.log("peace")
    e.preventDefault()
    setSent(true)
    addToMailchimp(email, { source: "Website" }, null)
      .then(data => {
        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <ParagraphHeader>
      {/* <Paragraph> */}
      <form>
        <div>
          {text}
          {/* <SmallParagaph>Email Address</SmallParagaph> */}
        </div>
        <FlexDiv>
          <Input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            name="EMAIL"
            className="required email"
          />
          <MainButtonStatic
            type="submit"
            name="subscribe"
            onClick={handleSubmit}
          >
            {sent ? "Thanks" : "Submit"}
          </MainButtonStatic>
        </FlexDiv>
      </form>
      {/* </Paragraph> */}
    </ParagraphHeader>
  )
}

export default Subscribe
