import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";


const ProductPage = () => {

  let { id } = useParams();
  
  const [product, setProduct] = useState({ id: 0, title: '', price: 0, description: '', category: '', image: '', rating: { rate: 0, count: 0 } })

  const getProductById = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/' + id)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductById()
  }, [])

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
    <StyledMain>
      <Navigation />
      <div className='wrapper'>
        <div className='back'>
          <MdArrowBackIosNew size={35} onClick={()=> window.history.back()}/>
        </div>
        <div className='image-div'>
          <img src={product.image} alt='product' />
        </div>
        <div className='content-div'>
          <h2>{product.title}</h2>
          <p className='rating'>Customer rating: &nbsp; {generateStars(product.rating.rate)} &nbsp;({product.rating.count})</p>
          <p>{product.description}</p>
          <p><b>Price:</b> {product.price}:-</p>
          <div className='btn-div'>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </StyledMain>
  )
}

const StyledMain = styled.main`
    background-color: #F5EBE0;
    min-height: 75vh;

    .wrapper {
      display: flex;
      gap: 8vw;
      justify-content: center;
    }

    .content-div {
      width: 25vw;
       margin: 10vh 0;
    }

    .rating, .back {
      display: flex;
      align-items: center;
    }

    .btn-div {
      text-align: left;
      margin-left: 2vw;
      margin-top: 5vh;
      button {
        all: unset;  
        background-color: #38312b;
        color: white;
        padding: 1vh;
        font-family: 'Kulim Park';
        font-weight: 600;
        font-size: 18px;

        &:hover {
          font-size: 20px;
    }
      }
      
    }

    img {
      width: 25vw;
      padding: 1vw;
      margin: 5vh 0;
      background-color: white;
      box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
      -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    }
`

export default ProductPage
