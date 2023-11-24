import React from 'react'
import { styled } from 'styled-components'
import { FaTruck } from 'react-icons/fa';
import Logo from './Logo';

const Banner = () => {
  return (
    <StyledDiv>
      <p id='offer'>25% off with code: newCustomer25</p>
      <Logo />
      <StyledDeliveryDiv>
        <FaTruck />
        <p id='delivery-text'>Fossil-free delivery</p>
      </StyledDeliveryDiv>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    background-color: #2B3038;
    color: white;

    #offer {
    justify-content: center;
    margin-top: 27px;
  }
`
const StyledDeliveryDiv = styled.div `
  display: flex;
  align-items: center;

  #delivery-text {
    margin-left: 8px;
  }

`
export default Banner
