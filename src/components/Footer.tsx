import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <p>Frontend for this website was created by Pernilla Lumikero using React and Typescript. API calls are made to <StyledLink to='https://fakestoreapi.com/'>Fake Store API</StyledLink>.</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer `
    background-color: #2B3038;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    height: 20vh;
`

const StyledLink = styled(Link) `
  color: white;
`

export default Footer
