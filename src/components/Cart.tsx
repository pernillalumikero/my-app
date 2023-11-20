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
            return sum = sum + item.price * item.quantity;
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
                        return <>
                            <div className='cart-wrapper'>
                                <div className='pic-holder'>
                                    <img className='tumbnail' src={item.image} alt='product' />
                                </div>
                                <div className='title'>
                                    <h4>{item.title.substring(0, 30) + '...'}</h4>
                                    <p>{item.price}:-</p>
                                    <div className='quantity-trash-wrapper'>
                                        <div className='quantity-wrapper'>
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
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                        </>
                    })}
                {cartSum !== 0
                    ? <>
                        <div className='price-wrapper'>
                            <p><b>Total</b></p>
                            <p>{cartSum.toFixed(2)}:-</p>
                        </div>
                        <div className='remove-checkout-wrapper'>
                            <button className='empthy-cart-btn' onClick={() => RemoveAllItems()}>Empthy cart</button>
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
    position: absolute;
    top: 9vh;
    right: 0;
    width: 20vw;
    padding: 2vh;
    background-color: #2B3038;
    color: white;

    .cart-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3vh;
    }

    .pic-holder {
        background-color: white;
    }

    .tumbnail {
        height: 6vw;
        width: 6vw;
        padding: 2px;
        object-fit: contain;
    }

    .icon {
        all: unset;
        text-align: right;
    }

    .quantity-trash-wrapper {
        text-align: center;
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
        width: 100%;
        background-color: white;
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
