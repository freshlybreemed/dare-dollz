import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    {
      allShopifyProduct {
        productTypes: distinct(field: { productType: SELECT })
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link className={navLink} to="/about/" activeClassName={activeLink}>
        about{" "}
      </Link>
      <Link className={navLink} to={`/dollz`} activeClassName={activeLink}>
        dollz
      </Link>
      <Link className={navLink} to={`/products`} activeClassName={activeLink}>
        shop
      </Link>
      <Link className={navLink} to={`/comicz`} activeClassName={activeLink}>
        comicz
      </Link>
      <Link className={navLink} to={`/creatorz`} activeClassName={activeLink}>
        creatorz
      </Link>
      {/* {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))} */}
    </nav>
  )
}
