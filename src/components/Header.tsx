import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';
import womanfashion from '../resources/pexels-evg-kowalievska-1126993.jpg'
import menfashion from '../resources/pexels-abraham-george-creations-14412949.jpg'
import jewelry from '../resources/pexels-the-glorious-studio-5442446.jpg'
import electronics from '../resources/pexels-emmanuel-jason-eliphalet-9956761.jpg'
import Navigation from './Navigation'
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const Header = () => {

    const [numberOfSlide, setNumberOfSlide] = useState(0)
    const [carouselImg, setCarouselImg] = useState(womanfashion)

    let carouselContent: { title: string, img: string, link: string }[] = [{
        title: `Women's clothing`,
        img: womanfashion,
        link: '/women'
    },
    {
        title: `Men's clothing`,
        img: menfashion,
        link: '/men'
    },
    {
        title: 'Jewelry',
        img: jewelry,
        link: '/jewelry'
    },
    {
        title: 'Electronics',
        img: electronics,
        link: '/electronics'
    }
    ]

    const handleClick = () => {
        let newSlide = numberOfSlide + 1;
        if (newSlide > 3) {
            newSlide = 0
            setNumberOfSlide(newSlide)
        }
        else {
            setNumberOfSlide(newSlide)
        }
        setCarouselImg(carouselContent[newSlide].img)
    }

    useEffect(() => {

        const interval = setInterval(() => {
            handleClick();
        }, 5000);

        return () => clearInterval(interval);
    }, [numberOfSlide]);

    return (
        <StyledHeader>
            <Navigation />
            <div className='wrapper'>
                <div className='title'>
                    <h1>{carouselContent[numberOfSlide].title}</h1>
                </div>
                <StyledLink to={carouselContent[numberOfSlide].link}>Shop now!</StyledLink>
            </div>
            <StyledImgDiv className='img-div' carouselImg={carouselImg}>
                <button className='arrowBtn' onClick={() => handleClick()}><MdOutlineArrowForwardIos /></button>
            </StyledImgDiv>
        </StyledHeader>
    )
}


const StyledImgDiv = styled.div<{ carouselImg: string }>`
        width: 65vw;
        height: 60vh;
        background-color: #3a5785;
        background-image: url(${props => props.carouselImg});
        background-size: cover;
        background-position: 0 40%;
        position: absolute;
        left: 30vw;
        top: 15vh;
        display: flex;
        justify-content: flex-end;
        box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
`

const StyledLink = styled(Link) `
        text-decoration: none;
        position: absolute;
        margin-top: 2vh;
        background-color: #38312b;
        color: white;
        padding: 1.5vh;
        font-family: 'Kulim Park';
        font-weight: 600;
        font-size: 22px;
        margin-left: 5vw;

    &:hover {
        background-color: grey;
    }
`

const StyledHeader = styled.header`
    background-color: #F5EBE0;
    height: 75vh;

    .wrapper {
        position: absolute;
        top: 30vh;
        left: 15vw;
        z-index: 1;
    }

    .title {
        background-color: white;
        padding: 2vh 5vh;
        font-family: 'Kaisei Tokumin';
        font-weight: 400;
        font-size: 25px;
        box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    }

    .arrowBtn {
        all: unset;
        background-color: unset;
        font-size: 40px;
        padding-top: 1vh;
        padding-right: 1vw;
        color: white;
    }
    .arrowBtn:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

export default Header
