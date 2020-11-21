
import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const AboutPage = () => {
  return (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)
  }

export default AboutPage
