import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCartItemsSelector } from './cartitems.slice'

const Cart = () => {

    const cartitems = useSelector(getCartItemsSelector)

    return (
        <StyledCart>
            <>
                {cartitems.length === 0
                    ? <p>Your cart is empthy</p>
                    : cartitems.map(item => {
                        return <>
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                        </>

                    })}
            </>
        </StyledCart>
    )
}

const StyledCart = styled.div`
    height: 50vh;
    width: 20vw;
    background-color: #2B3038;
    color: white;
    text-align: center;
`

export default Cart
