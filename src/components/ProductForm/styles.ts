import styled from "@emotion/styled"
import { breakpoints } from "../../utils/styles"
import { css } from "@emotion/react"

export const Label = styled.div`
  padding-bottom: 1rem;
`

export const SelectedValue = styled.div`
  width: 100%;
`

export const AddToCartWrapper = styled.div`
  display: block;
  margin: 20px 0;
  overflow: hidden;
`

export const AddToCartButton = styled.button`
  width: 65%;
  font-weight: 600;
  padding: 1.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  width:100%;
  margin-top: 2rem;
  border: 0.0625rem solid #000;
  /* height: 30px; */
`

export const AddToCartContainer = styled.div``

export const Add = styled.div`
  position: absolute;
  right: 0px;
  font-size: 20px;
  top: 1px;
  padding: 5px 3px 10px 15px;
  cursor: pointer;
`

export const Minus = styled.div`
  position: absolute;
  left: 5px;
  font-size: 20px;
  top: 1px;
  padding: 5px 10px 15px 3px;
  cursor: pointer;
`

export const QuantityContainer = styled.div`
  width: 30%;
  float: left;
  white-space: nowrap;
`

export const QuantityWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const QuantityInput = styled.input`
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 100;
  margin: 0 20px 0 0;
  border: 1px solid black;
`

export const Value = styled.div`
  width: 100%;
`

export const OptionsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  font-weight: 300;
`

export const OptionsList = styled.li`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

interface OptionProps {
  selected: boolean
}

export const Option = styled.li<OptionProps>`
  margin-right: 10px;
  flex-basis: 22%;
  display: list-item;
  font-weight: 350;
  list-style: none;
  text-transform: capitalize;
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.2rem;
  cursor: default;
  &:hover {
    background-color: black;
    color: white;
  }
  ${props =>
    props.selected &&
    css`
      background-color: black;
      color: white;
    `}
`
