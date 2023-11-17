import React, { useState, useEffect } from 'react'
import ProductHorizontalScroll from './ProductHorizontalScroll';
import styled from 'styled-components'

interface ProductProps {
    title: string,
    category: string
}

const ProductSection: React.FC<ProductProps> = ({ title, category }) => {

    const [products, setProducts] = useState<Product[] | []>([])

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

    const fetchProducts = async () => {
        let productsArr: Product[] = []
        try {
            const response = await fetch('https://fakestoreapi.com/products/')
            const data = await response.json()
            data.map((item: Product) => {
                if (item.category === category)
                    productsArr.push(item)
            })
            setProducts(productsArr)

        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return (
        <StyledProductSection>
            <h3>{title}</h3>
            <div className='product-section'>
                {products.map((product: Product) => {
                    return <ProductHorizontalScroll
                        key={product.id}
                        product={product} />
                })}
            </div>
        </StyledProductSection>
    )
}

const StyledProductSection = styled.div `
    padding-top: 0.5vh;
    background-color: white;

    h3 {
        font-family: 'Kaisei Tokumin';
        font-size: 30px;
        margin-left: 5vw;
        margin-bottom: 10px;
    }

    .product-section {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        background-color: white;
    }
`

export default ProductSection
