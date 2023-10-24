import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { useState, useEffect } from 'react'

const StartPage = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            setProducts(data)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
       fetchProducts(); 
    }, [])

    type Product = {id: number, title: string, price: number, description: string, category: string, image: string, rating: { rate: number, count: number}}

    return (
        <StyledMain>
            <Header />
            <h3 className='h3'>Trending now</h3>
            {products.map((product: Product) => {
                return product.rating.rate > 3.8 ? <h2>{product.title}</h2> : null
            })}
        </StyledMain>
    )
}

const StyledMain = styled.main`
    h3 {
        font-family: 'Kaisei Tokumin';
        font-size: 30px;
        
    }
`

export default StartPage
