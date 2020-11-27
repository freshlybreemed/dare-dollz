import React, { useContext } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import StoreContext from "../../../context/StoreContext"
import { Wrapper, CloseButton, Paragraph } from "./styles"

const LineItem = props => {
  const { close } = useStaticQuery(graphql`
    {
      close: file(relativePath: { in: "x.svg" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout }
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => <Paragraph>{option.name}: {option.value}</Paragraph>
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <Paragraph>
        {item.title} 
      </Paragraph>
      <Paragraph>
        {item.variant.title === !"Default Title" ? item.variant.title : ""}
      {selectedOptions}
      </Paragraph>
      {item.quantity}
      <CloseButton onClick={handleRemove}>
        <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 16 16"><path d="M0 14.434l6.4-6.4-6.4-6.4L1.634 0l6.4 6.4 6.4-6.4L16 1.634l-6.4 6.4 6.4 6.4L14.434 16l-6.4-6.4-6.4 6.4z"></path></svg>
      </CloseButton>
    </Wrapper>
  )
}

export default LineItem
