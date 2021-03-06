import React, { useState, useContext, useEffect, useCallback } from "react"
import find from "lodash/find"
import isEqual from "lodash/isEqual"
import PropTypes from "prop-types"

import StoreContext from "../../context/StoreContext"
import {
  Label,
  Option,
  OptionsList,
  OptionsWrapper,
  SelectedValue,
  QuantityInput,
  QuantityWrapper,
  AddToCartContainer,
  AddToCartWrapper,
  AddToCartButton,
  QuantityContainer,
  Add,
  Minus,
  Value
} from "./styles"

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice }
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [color, setColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding }
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)
  console.log(product)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    if (target.value >= 1) setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, value) => {
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value
    }
    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value
        }
      ]
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency"
  }).format(variant.price)

  return (
    <>
      <h3>{price}</h3>
      <OptionsWrapper>
        {options
          .filter(curr => curr.name !== "Title")
          .map(({ id, name, values }, index) => (
            <Label key={id}>
              <label htmlFor={name}>{`${name}: `} </label>
              <SelectedValue>
                <OptionsList>
                  {values.map(value => (
                    <Option
                      value={value}
                      key={`${name}-${value}`}
                      onClick={event => handleOptionChange(index, value)}
                      selected={
                        variant.selectedOptions.filter(
                          curr => curr.name === name
                        )[0].value === value
                      }
                    >
                      {value}
                    </Option>
                  ))}
                  <br />
                </OptionsList>
              </SelectedValue>
            </Label>
          ))}
        <Label>
          <label htmlFor="quantity">Quantity: </label>
          <AddToCartContainer>
            <AddToCartWrapper>
              <QuantityContainer>
                <QuantityWrapper>
                  <Add
                    onClick={() => {
                      const target = { value: quantity + 1 }
                      handleQuantityChange({ target })
                    }}
                  >
                    +
                  </Add>
                  <Minus
                    onClick={() => {
                      const target = { value: quantity - 1 }
                      handleQuantityChange({ target })
                    }}
                  >
                    -
                  </Minus>
                  <QuantityInput
                    // type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    step="1"
                    onChange={handleQuantityChange}
                    value={quantity}
                  />
                </QuantityWrapper>
              </QuantityContainer>
              <AddToCartButton
                type="submit"
                disabled={!available || adding}
                onClick={handleAddToCart}
              >
                {!available ? 'Sold Out' : adding ? "Added!" : "Add to Cart"}
              </AddToCartButton>
            </AddToCartWrapper>
          </AddToCartContainer>
        </Label>
      </OptionsWrapper>
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string)
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string
          })
        )
      })
    )
  }),
  addVariantToCart: PropTypes.func
}

export default ProductForm
