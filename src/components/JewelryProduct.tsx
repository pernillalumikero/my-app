import React from 'react'
import styled from 'styled-components'

interface JewelryProps {
    item: {
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

}

const JewelryProduct: React.FC<JewelryProps> = ({ item }) => {
    return (
        <StyledDiv>
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>Price: {item.price}:-</p>
                <p>{item.description}</p>
                <button>Buy</button>
            </div>
            <div>
                <img className='img' src={item.image} alt='product' />
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    justify-content: space-between;
    padding: 3vh 5vw;
    background-color: white;

    .img {
        width: 200px;
        height: 200px;
    }

    button {
        all: unset;
        cursor: pointer;
        margin-bottom: 2vh;
        margin-left: 2vw;
        background-color: #38312b;
        color: white;
        padding: 1vh;
        font-family: 'Kulim Park';
        font-weight: 600;
        font-size: 16px;
        border: 3px solid white;
    }

`
export default JewelryProduct
