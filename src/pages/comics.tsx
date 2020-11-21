
import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import ComicView from '../components/Comics/ComicView'

const ComicsPage = () => {
  return (
  <>
    <SEO title="Comics" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1>About</h1> */}
    {/* <p>Welcome to your new Shop powered by Gatsby and Shopify.</p> */}
    <ComicView/>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)
  }

export default ComicsPage
