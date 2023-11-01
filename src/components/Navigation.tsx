import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { PiBagBold } from "react-icons/pi";

const Navigation = () => {
  return (
    <StyledWrapper>
      <StyledNav>
        <StyledNavLink to='/'>Home</StyledNavLink>
        <StyledNavLink to='/women'>Woman</StyledNavLink>
        <StyledNavLink to='/men'>Man</StyledNavLink>
        <StyledNavLink to='/jewelry'>Jewelry</StyledNavLink>
        <StyledNavLink to='/electronics'>Electronics</StyledNavLink>
      </StyledNav>
      <StyledButton><PiBagBold size={26} /></StyledButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
    padding-top: 0.5vh;
    margin-right: 1.5vw;
`

export default Navigation
