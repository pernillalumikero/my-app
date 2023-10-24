import React from 'react'
import { styled } from 'styled-components'
import womanfashion from '../resources/pexels-evg-kowalievska-1126993.jpg'
import Navigation from './Navigation'
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
            <div className='wrapper'>
                <div className='title'>
                    <h1>Women's clothing</h1>
                </div>
                <button>Shop now!</button>
            </div>
            <div className='img-div'>
                <button className='arrowBtn'><MdOutlineArrowForwardIos /></button>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #F5EBE0;
    height: 75vh;

    .wrapper {
        position: absolute;
        top: 30vh;
        left: 10vw;
        z-index: 1;
    }

    .title {
        background-color: white;
        padding: 2vh;
        font-family: 'Kaisei Tokumin';
        font-weight: 400;
        font-size: 25px;
    }
    .img-div {
        width: 65vw;
        height: 60vh;
        background-color: #3a5785;
        background-image: url(${womanfashion});
        background-size: cover;
        background-position: 0 40%;
        position: absolute;
        left: 30vw;
        top: 15vh;
    }
    .arrowBtn {
        top: 45%;
        left: 90%;
        background-color: unset;
        font-size: 40px;
        padding-top: 2vh;
    }
    .arrowBtn:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    button {
        all: unset;
        position: absolute;
        background-color: #38312b;
        color: white;
        margin-top: 2vh;
        padding: 1.5vh;
        font-family: 'Kulim Park';
        font-weight: 600;
        font-size: 22px;
        left: 22vw;
    }
    button:hover {
        background-color: grey;
    }
`

export default Header
