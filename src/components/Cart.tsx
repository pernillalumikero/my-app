import React from 'react'
import styled from 'styled-components'

const Cart = () => {
  return (
    <StyledCart>
      <p>This is the cart</p>
    </StyledCart>
  )
}

const StyledCart = styled.div `
    height: 200px;
    width: 100px;
    background-color: white;
    text-align: center;
`

export default Cart
