import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import inspoimg from '../../resources/pexels-lucas-pezeta-3081390.jpg'
import Navigation from '../Navigation'
import JewelryProduct from '../JewelryProduct'

const Jewelry = () => {

    const [jewelry, setJewelry] = useState<Product[] | []>([])

    type Product = {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number
        },
        quantity: number
    }

    const fetchJewelry = async () => {
        let jewelryArr: Product[] = []
        try {
            const response = await fetch('https://fakestoreapi.com/products/')
            const data = await response.json()
            data.map((item: Product) => {
                if (item.category === 'jewelery')
                    jewelryArr.push(item)
            })
            setJewelry(jewelryArr)

        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchJewelry();
    }, [])

    return (
        <StyledMain>
            <Navigation />
            <div className='wrapper'>
                <StyledImgDiv inspoimg={inspoimg} ></StyledImgDiv>
                <div id='inspo-text'>
                    <h2>Jewelry for all occasions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='jewelry-wrapper'>
                {jewelry.map(item => {
                    return <JewelryProduct item={item}/>
                })}
            </div>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: #F5EBE0;

    h2 {
        font-family: 'Kulim Park';
        font-size: 32px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
    }

    .wrapper {
        display: flex;
        gap: 5vw;
        justify-content: space-evenly;
        padding: 3vh 5vw;
    }

`
const StyledImgDiv = styled.div<{ inspoimg: string }> `
    width: 180vw;
    height: 50vh;
    background-image: url(${props => props.inspoimg});
    background-size: cover;
    background-position: 0 55%;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
`

export default Jewelry;