import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import gif from "../images/logo.gif"
function Logo({ showGif = false }) {
  return showGif ? (
    <img width={200} src={gif} />
  ) : (
    <StaticImage width={200} src={"../images/newlogo.png"} />
  )
}

export default Logo
