import React from 'react'
import { styled } from 'styled-components'
import { FaTruck } from 'react-icons/fa';

const Banner = () => {
  return (
    <StyledDiv>
      <p>25% on your first order!</p>
      <StyledDeliveryDiv>
        <FaTruck />
        <p id='delivery-text'>Fossil-free delivery</p>
      </StyledDeliveryDiv>
      <p>Free returns</p>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
    width: 96vw;
    display: flex;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    background-color: #2B3038;
    color: white;
`
const StyledDeliveryDiv = styled.div `
  display: flex;
  align-items: center;

  #delivery-text {
    margin-left: 1vw;
  }
`
export default Banner
