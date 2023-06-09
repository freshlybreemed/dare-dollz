import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import Logo from "../icons/logo"
import {
  container,
  intro,
  callOut,
  callToAction,
  logos,
  deployButton,
  landingButton,
} from "./index.module.css"
import { StaticImage } from "gatsby-plugin-image"

function Hero(props) {
  return <div className={container}></div>
}

export default function IndexPage({ data }) {
  return (
    <Layout showNav={false}>
      <Hero />
      <div className={logos}>
        <Logo />
      </div>
      <a href="/home" className={landingButton}>
        Enter
      </a>
      <StaticImage src="../images/dollbanner.png" />
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}

export const Head = () => <Seo />
