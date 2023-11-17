import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoS from '../resources/logoS.png'
import logoC from '../resources/logoC.png'

const Logo = () => {
    return (
        <StyledLink to='/'>
            <img className='logo' src={logoS} alt='S' />
            <h2>tyled</h2>
            <img className='logo' src={logoC} alt='C' />
            <h2>omponents</h2>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    font-family: 'Kaisei Tokumin';

  .logo {
    width: 32px;
    height: 32px; 
  }
`

export default Logo
