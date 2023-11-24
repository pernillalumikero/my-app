import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemsSelector, increaseQuantity, decreaseQuantity, removeFromCart } from '../cartitems.slice'
import styled from 'styled-components'
import Navigation from '../Navigation'
import { useAppDispatch } from '../store.hooks';
import { FaTrashAlt, FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Checkout = () => {

  const cartitems = useSelector(getCartItemsSelector)
  const dispatch = useAppDispatch()
  const [sumWithDiscount, setSumWithDiscount] = useState(0)
  const [discountCode, setDiscountCode] = useState('')
  const [discount, setDiscount] = useState(false)
  const [errormessage, setErrormessage] = useState('')

  type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
    quantity: number
  };

  const calculateSumWithDiscounts = () => {
    
    if (discountCode === 'newCustomer25') {
      setDiscount(true)
      setErrormessage('')
    } else if (discountCode === '') {
      setErrormessage('')
    } else {
      setErrormessage('Sorry not a valid code')
    }

    let sum = 0;
    cartitems.map((item) => {
      return sum = sum + item.price * item.quantity;
    })
    if (discount === true) {
      sum = sum * 0.75
    }

    setSumWithDiscount(sum)

    return sumWithDiscount.toString
  }

  useEffect(() => {
    calculateSumWithDiscounts();
  }, [cartitems])

  const IncreaseQuantity = (item: Product) => {
    dispatch(increaseQuantity(item))
  }

  const DecreaseQuantity = (item: Product) => {
    dispatch(decreaseQuantity(item))
  }

  const RemoveItem = (item: Product) => {
    dispatch(removeFromCart(item))
  }

  return (
    <>
      <div>
        <Navigation />
        <StyledTitleDiv>
          <h2>Shopping cart</h2>
        </StyledTitleDiv>
      </div>
      <StyledWrapper>
        <StyledTable>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartitems.map(item => {
            return <>
              <StyledTr>
                <td>
                  <StyledImg src={item.image} />
                </td>
                <td className='title-td'>
                  <h4>{item.title}</h4>
                </td>
                <td>
                  <div className='quantity-td'>
                    <button onClick={() => DecreaseQuantity(item)} className='arrow-btn'>
                      <FaAngleLeft />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => IncreaseQuantity(item)} className='arrow-btn'>
                      <FaAngleRight />
                    </button>
                    <button className='icon' onClick={() => RemoveItem(item)}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
                <td className='price-td'>
                  <p>{item.price}:-</p>
                </td>
              </StyledTr>
            </>
          })}
        </StyledTable>
        <StyledCheckoutDiv>
          <div>
            {sumWithDiscount !== 0
              ? <div className='total-wrapper'>
                <h4>Total: </h4>
                <p>{sumWithDiscount.toFixed(2)}:-</p>
              </div>
              : null}

          </div>
          <p>Discount code:</p>
          <div className='discount-wrapper'>
            <input onChange={(e) => setDiscountCode(e.target.value)}></input>
            <button onClick={() => calculateSumWithDiscounts()}>Add code</button>
            {errormessage === ''
              ? null
              : <p>{errormessage}</p>}
          </div>
        </StyledCheckoutDiv>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: space-evenly;
  background-color: #F5EBE0;
  padding: 6vh 2vw;
`

const StyledCheckoutDiv = styled.div`
  height: fit-content;
  padding: 2vh;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  background-color: white;

    .total-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
`

const StyledTitleDiv = styled.div`
  text-align: center;
  background-color: #F5EBE0;

  h2 {
    margin: unset;
    padding: 2vh;
  }
`

const StyledTable = styled.table`
  background-color: white;
  border-spacing: 3vw;
  padding: 1vw;
  text-align: left;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);

`

const StyledImg = styled.img`
    height: 6vw;
    width: 6vw;
    padding: 2px;
    object-fit: contain;
`

const StyledTr = styled.tr`

  .title-td {
    max-width: 30vw;
  }

  .quantity-td {
    display: flex;
    justify-content: space-between;
  }

  .price-td {
    
  }

  button {
    all: unset;
    cursor: pointer;
  }
`


export default Checkout
