import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Navigation from '../Navigation'
import ProductHorizontalScroll from '../ProductHorizontalScroll'
import { useState, useEffect } from 'react';

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

    return (
        <StyledMain>
            <Navigation />
            <Header />
            <h3 className='h3'>Trending now</h3>
            <div className='product-section'>
                {products.map((product: Product) => {
                    return product.rating.rate > 3.8
                        ? <ProductHorizontalScroll
                            key={product.id}
                            product={product} />
                        : null
                })}
            </div>
            <h3 className='h3'>Women's clothing</h3>
            <div className='product-section'>
                {products.map((product: Product) => {
                    return product.category === "women's clothing"
                        ? <ProductHorizontalScroll
                            key={product.id}
                            product={product} />
                        : null
                })}
            </div>
            <h3 className='h3'>Men's clothing</h3>
            <div className='product-section'>
                {products.map((product: Product) => {
                    return product.category === "men's clothing"
                        ? <ProductHorizontalScroll
                            key={product.id}
                            product={product} />
                        : null
                })}
            </div>
            <h3 className='h3'>Jewelry</h3>
            <div className='product-section'>
                {products.map((product: Product) => {
                    return product.category === "jewelery"
                        ? <ProductHorizontalScroll
                            key={product.id}
                            product={product} />
                        : null
                })}
            </div>
            <h3 className='h3'>Electronics</h3>
            <div className='product-section'>
                {products.map((product: Product) => {
                    return product.category === "electronics"
                        ? <ProductHorizontalScroll
                            product={product} />
                        : null
                })}
            </div>

        </StyledMain>
    )
}

const StyledMain = styled.main`
    .product-section {
        display: flex;
        overflow-x: scroll;
    }

    h3 {
        font-family: 'Kaisei Tokumin';
        font-size: 30px;
        margin-left: 5vw;
        margin-bottom: 10px;
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
