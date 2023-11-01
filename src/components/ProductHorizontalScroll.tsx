import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import styled from 'styled-components';

interface ProductHorizontalScrollProps {
  product: { id: number, title: string, price: number, description: string, category: string, image: string, rating: { rate: number, count: number } };
}

const ProductHorizontalScroll: React.FC<ProductHorizontalScrollProps> = ({ product }) => {

  const generateStars = (rating: number) => {
    let starsArr = [];
    let i;
    for (i = 1; i < rating; i++) {
      starsArr.push(i);
    }

    if (rating > i - 0.5) {
      return <>
        {starsArr.map((star: number) => {
          return <BsStarFill key={star} />
        })}
        <BsStarHalf />
      </>
    } else {
      return starsArr.map((star: number) => {
        return <BsStarFill key={star} />
      })
    }
  }

  return (
    <ProductDiv key={product.id} className='product-div'>
      <img className='product-img' src={product.image} alt='product' />
      {product.title.length > 30
        ? <p>{product.title.substring(0, 30) + '...'}</p>
        : <p className='short-title'>{product.title}</p>}
      <div className='price-star-wrapper'>
        <p>{product.price}:-</p>
        <div className='stars-wrapper'>
          {generateStars(product.rating.rate)}
        </div>
      </div>
    </ProductDiv>
  )
}

const ProductDiv = styled.div`
  width: 200px;
  border: 1px solid white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  margin: 30px 50px;

  .short-title {
    margin-bottom: 34px;
  }

  &:hover {
    box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75);
  }
`

export default ProductHorizontalScroll
