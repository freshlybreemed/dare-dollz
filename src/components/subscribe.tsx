import React, { useState } from "react"
import { breakpoints } from "../utils/styles"
import { coloredBox, flexDiv, input, mainButton } from "./subscribe.module.css"
import addToMailchimp from "gatsby-plugin-mailchimp"

// const SubmitButton = styled.input`
//   /* width: 40%; */
//   font-weight: 600;
//   padding: 0.5rem;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   /* width: 100%; */
//   /* margin-top: 0rem; */
//   border: 0.0625rem solid #000;
//   /* height: 30px; */
//   @media (max-width: ${breakpoints.m}px) {
//     width: 94%;
//   }
// `

const Subscribe = ({ text }: { text?: string }) => {
  const [email, setEmail] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)

  const handleSubmit = (e) => {
    console.log("peace")
    e.preventDefault()
    setSent(true)
    addToMailchimp(email, { source: "Website" }, null)
      .then((data) => {
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <div className={coloredBox}>
      {/* <Paragraph> */}
      <form>
        <div>{text}</div>
        <div className={flexDiv}>
          <input
            className={input}
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            name="EMAIL"
          />
          <button
            className={mainButton}
            type="submit"
            name="subscribe"
            onClick={handleSubmit}
          >
            {sent ? "Thanks" : "Submit"}
          </button>
        </div>
      </form>
      {/* </Paragraph> */}
    </div>
  )
}

export default Subscribe
