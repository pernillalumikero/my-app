import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemsSelector, increaseQuantity, decreaseQuantity } from './cartitems.slice'
import styled from 'styled-components';
import { useAppDispatch } from './store.hooks';
import { removeFromCart, removeAll } from './cartitems.slice';
import { FaTrashAlt, FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


interface CartProps {
    setIsCartOpen: (isCartOpen: boolean) => void
}

const Cart: React.FC<CartProps> = ({ setIsCartOpen }) => {

    const cartitems = useSelector(getCartItemsSelector)
    const dispatch = useAppDispatch()
    const [cartSum, setCartSum] = useState(0)

    type Product = {
        id: number,
        title: string,
        price: number,
        image: string,
        quantity: number
    };

    const cartTotal = () => {
        let sum = 0;
        cartitems.map((item) => {
            return sum = sum + item.price*item.quantity;
        })
        setCartSum(sum)
        return cartSum.toString
    }


    useEffect(() => {
        cartTotal();
    }, [cartitems])



    const RemoveItem = (item: Product) => {
        dispatch(removeFromCart(item))
    }

    const RemoveAllItems = () => {
        dispatch(removeAll())
    }

    const IncreaseQuantity = (item: Product) => {
        dispatch(increaseQuantity(item))
    }

    const DecreaseQuantity = (item: Product) => {
        dispatch(decreaseQuantity(item))
    }


    return (
        <StyledCart onMouseLeave={() => setIsCartOpen(false)}>
            <>
                <h4>Shopping Cart</h4>
                {cartitems.length === 0
                    ? <p>Your cart is empthy</p>
                    : cartitems.map(item => {
                        return <div className='wrapper'>
                            <img className='tumbnail' src={item.image} alt='product' />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.price}:-</p>
                            </div>
                            <div>
                                <div className='quantity-wrapper'>
                                    <button onClick={() => DecreaseQuantity(item)}className='arrow-btn'><FaAngleLeft /></button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => IncreaseQuantity(item)} className='arrow-btn'><FaAngleRight /></button>
                                </div>
                                <button className='icon' onClick={() => RemoveItem(item)}><FaTrashAlt /></button>
                            </div>
                        </div>
                    })}
                {cartSum !== 0
                    ? <>
                        <div className='line'></div>
                        <div className='price-wrapper'>
                            <p><b>Total</b></p>
                            <p>{cartSum.toFixed(2)}:-</p>
                        </div>
                        <div className='remove-checkout-wrapper'>
                            <button className='empthy-cart-btn' onClick={() => RemoveAllItems()}>Remove all items</button>
                            <StyledLink to='/checkout'><b>Go to Checkout</b><FaArrowRight /></StyledLink>
                        </div>
                    </>
                    : null}
            </>
        </StyledCart>
    )
}

const StyledLink = styled(Link)`
    display: flex;
    gap: 1vw;
    align-items: center;
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }
`

const StyledCart = styled.div`
    width: 30vw;
    padding: 2vh;
    position: absolute;
    right: 0;
    background-color: #2B3038;
    color: white;

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2vh;
    }

    .quantity-wrapper {
        display: flex;
        align-items: center;
        gap: 1vw;
    }

    .arrow-btn {
        all: unset;
    }

    .remove-checkout-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .line {
        height: 1px;
        margin: 3vh;
        background-color: white;
    }
    .tumbnail {
        height: 70px;
        width: 70px;
    }
    .icon {
        all: unset;
        text-align: right;
    }
    .empthy-cart-btn {
        all: unset;
        cursor: pointer;
        font-size: 12px;
    }
    .price-wrapper {
        display: flex;
        justify-content: space-between;
    }
`

export default Cart
