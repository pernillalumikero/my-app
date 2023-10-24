import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { useState, useEffect } from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const StartPage = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            setProducts(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    type Product = { id: number, title: string, price: number, description: string, category: string, image: string, rating: { rate: number, count: number } }

    const generateStars = (rating: number) => {
        let starsArr = [];
        let i;
        for (i = 1; i < rating; i++) {
            starsArr.push(i);
        }
        console.log(`rating: ${rating} i: ${i - 0.5}`)
        if (rating > i - 0.5) {
            return <>
                {starsArr.map((star) => {
                    return <BsStarFill key={star}/>
                })}
                <BsStarHalf />
            </>
        } else {
            return starsArr.map((star) => {
                return <BsStarFill key={star}/>
            })
        }
    }

    return (
        <StyledMain>
            <Header />
            <h3 className='h3'>Trending now</h3>
            <div className='trending-section'>
                {products.map((product: Product) => {
                    return product.rating.rate > 3.8
                        ? <div key={product.id} className='product-div'>
                            <img className='product-img' src={product.image} alt='product' />
                            <p>{product.title}</p>
                            <div className='price-star-wrapper'>
                                <p>{product.price}:-</p>
                                <div className='stars-wrapper'>
                                    {generateStars(product.rating.rate)}
                                </div>
                            </div>
                        </div>
                        : null
                })}
            </div>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    .trending-section {
        display: flex;
        gap: 3vw;
        overflow-x: scroll;
        margin-left: 3vw;
    }

    h3 {
        font-family: 'Kaisei Tokumin';
        font-size: 30px;
        margin-left: 5vw;
    }
    .product-img {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
    .price-star-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .stars-wrapper {
        display: flex;
    }
`

export default StartPage
