import React from 'react'
import styled from 'styled-components'

interface PageProps {
    img: string,
    title: string
}

const PageHeader: React.FC<PageProps> = ({ img, title }) => {
    return (
        <StyledPageHeader>
            <StyledImgDiv img={img} ></StyledImgDiv>
            <div id='inspo-text'>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
            </div>
        </StyledPageHeader>
    )
}

const StyledPageHeader = styled.div `
    display: flex;
    gap: 5vw;
    justify-content: space-evenly;
    padding: 3vh 5vw;

    h2 {
        font-family: 'Kulim Park';
        font-size: 32px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
    }
`

const StyledImgDiv = styled.div<{ img: string }> `
    width: 180vw;
    height: 50vh;
    margin-bottom: 5vh;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: 0 55%;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
`

export default PageHeader
