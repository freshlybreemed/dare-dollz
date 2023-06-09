import * as React from "react"
import { Layout } from "../components/layout"
import {
  container,
  gridLeft,
  twoColumnGrid,
  gridRight,
  coloredBox,
  paragraph,
  shopButton,
  centerDiv,
  paddingBottomAndTop,
} from "./comicz.module.css"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
function Hero(props) {
  return <div className={container}></div>
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <div className={container}>
        <div className={twoColumnGrid}>
          <div className={gridLeft}>
            <StaticImage atl="" src={"../images/IMG_5819.jpg"} />
          </div>
          <div className={gridRight}>
            <StaticImage atl="" src={"../images/IMG_5574.jpg"} />
          </div>
        </div>
        <div className={paddingBottomAndTop}>
          <p className={paragraph}>
            Meet Demi, Paris, Chanel, and Bleu, known as Dare Dollz, the young,
            stylish social media mavens who seem to have it all, but there is
            more to these ladies than meets the eye. They are elite special
            agents who lead double lives as prominent social media influencers
            in the hyper-advanced metropolis of Carnado. Their latest mission is
            as complex as their dual identities: to capture notorious rap artist
            and criminal mastermind 8 Figga.
          </p>
          <p className={paragraph}>
            In the race against time, the agents must use every resource, from
            advanced tech gadgets to social media prowess, to outsmart 8 Figga.
            Their struggle against him tests their loyalties, friendships, and
            individual strengths, culminating in a climactic showdown that could
            forever change the face of Carnado.
          </p>
          <p className={paragraph}>
            "Dare Dollz: Age of Consent" is a thrilling, futuristic tale that
            fuses elements of science fiction, action, and drama, exploring
            themes of identity, technology, and the lengths one will go to
            uphold justice.
          </p>
        </div>
        <div className={centerDiv}>
          <a href="/products/comics" className={shopButton}>
            Shop Now
          </a>
        </div>
      </div>

      {/* <StaticImage src="../images/dollbanner.png" /> */}
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}
