import React from 'react'
import { useSelector } from 'react-redux'
import { getCartItemsSelector } from '../cartitems.slice'


const Checkout = () => {

    const cartitems = useSelector(getCartItemsSelector)

  return (
    <div>
      <h2>Checkout</h2>
      {cartitems.map(item => {
        return <>
            <p>{item.title}</p>
        </>
      })}
    </div>
  )
}

export default Checkout
