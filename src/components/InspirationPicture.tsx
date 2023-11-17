import React from 'react'
import styled from 'styled-components'

interface InspirationProps {
    pic: string,
    likes: number,
    days: number,
    username: string,
    comment: string
}

const InspirationPicture: React.FC<InspirationProps> = ({pic, likes, days, username, comment}) => {
    return (
        <StyledInspirationDiv className='inspo-wrapper'>
            <img src={pic} alt='Inspiration from instagram' />
            <div className='likes-wrapper'>
                <p className='likes'>{likes} likes</p>
                <p className='likes'>{days} days ago</p>
            </div>
            <p className='comment'><b>{username}</b> {comment} <span>#styledcomponents</span></p>
        </StyledInspirationDiv>
    )
}

const StyledInspirationDiv = styled.div `
    padding: 2vh;
    background-color: white;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);

    .comment {
    max-width: 20vw;
    }

    .likes {
        font-size: 15px;
    }

    .likes-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: -20px;
    }

    img {
        width: 20vw;
        height: 20vw;
    }

    span {
        font-size: 15px;
        color: blue;
    }

`

export default InspirationPicture
