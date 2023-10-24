import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'

const Navigation = () => {
  return (
    <div>
      <StyledNavLink to='/women'>Woman</StyledNavLink>
      <StyledNavLink to='/men'>Man</StyledNavLink>
      <StyledNavLink to='/jewelry'>Jewelry</StyledNavLink>
      <StyledNavLink to='/electronics'>Electronics</StyledNavLink>
    </div>
  )
}

const StyledNavLink = styled(NavLink) `
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

export default Navigation
