import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div className='wrapper'>
        <div>
          <h4>Help</h4>
          <p>FAQ</p>
          <p>Customer service</p>
          <p>Order</p>
          <p>Shipping</p>
          <p>Return policy</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Tel. 123-456-789</p>
          <p>Adress: Fashion street 1</p>
          <p>Email: styledcomponents@email.com</p>
        </div>
        <div id='border'>
          <div id='social-media'>
            <div className='icon-holder'>
              <h4>Follow us</h4>
            </div>
            <div className='icon-holder'>
              <AiOutlineFacebook size={20}/>
              <StyledLink to='https://www.facebook.com'>Facebook</StyledLink >
            </div>
            <div className='icon-holder'>
              <AiOutlineInstagram size={20}/>
              <StyledLink to='https://www.instagram.com'>Instagram</StyledLink >
            </div>
            <div className='icon-holder' id='last-link'>
              <FaTiktok />
              <StyledLink to='https://www.tiktok.com'>TikTok</StyledLink >
            </div>
          </div>
        </div>
      </div>
      <p><b>Frontend for this website was created by Pernilla Lumikero using React and Typescript. API calls are made to <StyledLink id='fakestore-link' to='https://fakestoreapi.com/'>Fake Store API</StyledLink>.</b></p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    background-color: #2B3038;
    padding: 2vh;
    display: flex;
    color: white;
    align-items: center;
    flex-direction: column;

    .wrapper {
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .icon-holder {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    #border {
      background-color: #F5EBE0;
      padding: 2vh;
      margin-bottom: 3vh;

    }

    #social-media {
      background-color: #F5EBE0;
      color: black;
      padding: 0 5vw;
      border: 2px solid black;
    }

    a {
      color: black;
      text-decoration: none;
    }

    #fakestore-link {
      color: white;
    }

    #last-link {
      padding-bottom: 3vh;
    }

`

const StyledLink = styled(Link)`
  color: white;
  padding: 1vh 0;
`

export default Footer
