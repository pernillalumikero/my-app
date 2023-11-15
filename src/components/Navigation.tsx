import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PiBagBold } from "react-icons/pi";
import Cart from './Cart';
import { useSelector } from 'react-redux'
import { getCartItemsSelector } from './cartitems.slice'

const Navigation = () => {

  const cartitems = useSelector(getCartItemsSelector)
  const [isCartOpen, setIsCartOpen] = useState(false);

  let quantity = 0;

  const getQuantity = () => {
    cartitems.map(item => {
      quantity = quantity + item.quantity
    })
    return quantity
  }

  return (
    <StyledWrapper>
      <StyledNav>
        <StyledNavLink to='/'>Home</StyledNavLink>
        <StyledNavLink to='/women'>Woman</StyledNavLink>
        <StyledNavLink to='/men'>Man</StyledNavLink>
        <StyledNavLink to='/jewelry'>Jewelry</StyledNavLink>
        <StyledNavLink to='/electronics'>Electronics</StyledNavLink>
      </StyledNav>
      <StyledCartWrapper>
        {isCartOpen
          ? <Cart
            setIsCartOpen={setIsCartOpen} />
          : <StyledButton onMouseEnter={() => setIsCartOpen(true)}>
            <StyledPiBagBold size={30} />
            {cartitems.length === 0
              ? null
              : <div className='quantity-div'>
                {getQuantity()}
              </div>}

          </StyledButton>}
      </StyledCartWrapper>
    </StyledWrapper>
  )
}

const StyledCartWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  color: #2B3038;

  .quantity {
    position: absolute;
    right: 2.3vw;
    font-size: 12px;
    font-weight: bold;
  }

  .quantity-div {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: #2B3038;
    position: absolute;
    right: 1vw;
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    padding-top: 1px;
  }
`

const StyledPiBagBold = styled(PiBagBold)`
  margin-right: 1.5vw;
  margin-top: 0.5vh;
`

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #F5EBE0;
`

const StyledNav = styled.nav`
    height: 5vh;
    display: flex;
    align-items: center;
`

const StyledNavLink = styled(NavLink)`
    all: unset;
    cursor: pointer;
    font-family: 'Kulim Park';
    font-weight: 700;
    font-size: 20px;
    padding: 2vh;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 8px;
    }
`

const StyledButton = styled.button`
    all: unset;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 0.5vh;
    z-index: 2;
`

export default Navigation
