import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addToCart, getCartItemsSelector } from './cartitems.slice';
import { useAppDispatch } from './store.hooks';

interface ProductHorizontalScrollProps {
  product: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  };
}

const ProductHorizontalScroll: React.FC<ProductHorizontalScrollProps> = ({ product }) => {

  const cartitems = useSelector(getCartItemsSelector)

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

  const dispatch = useAppDispatch()

  const addItem = (item: typeof product) => {
    dispatch(addToCart(item))
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
      <div className='btn-wrapper'>
        <button className='btn' onClick={() => addItem(product)}>Buy</button>
        <StyledLink to={'product/' + product.id} className='btn'>Read more</StyledLink>
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
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }
  button {
    all: unset
  }
  .btn {
    cursor: pointer;
    margin-bottom: 2vh;
    background-color: #38312b;
    color: white;
    padding: 1vh;
    font-family: 'Kulim Park';
    font-weight: 600;
    font-size: 16px;
    border: 3px solid white;
  }
  .btn:hover {
        border: 3px solid #38312b;
        font-size: 17px;
    }
`

const StyledLink = styled(Link)`
  all: unset;
`

export default ProductHorizontalScroll
