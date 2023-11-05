import React from 'react'
import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PiBagBold } from "react-icons/pi";
import Cart from './Cart';

const Navigation = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <StyledWrapper>
      <StyledNav>
        <StyledNavLink to='/'>Home</StyledNavLink>
        <StyledNavLink to='/women'>Woman</StyledNavLink>
        <StyledNavLink to='/men'>Man</StyledNavLink>
        <StyledNavLink to='/jewelry'>Jewelry</StyledNavLink>
        <StyledNavLink to='/electronics'>Electronics</StyledNavLink>
      </StyledNav>
      <StyledButton onClick={() => setIsCartOpen(!isCartOpen)}><StyledPiBagBold size={26} /> {isCartOpen ? <Cart /> : null}</StyledButton>
    </StyledWrapper>
  )
}

const StyledPiBagBold = styled(PiBagBold) `
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
