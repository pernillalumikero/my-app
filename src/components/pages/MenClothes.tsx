import React from 'react'
import styled from 'styled-components'
import PageHeader from '../PageHeader'
import img from '../../resources/pexels-keith-lobo-3907595.jpg'
import Navigation from '../Navigation'
import ProductSection from '../ProductSection'

const MenClothes = () => {
    return (
        <StyledMain>
            <Navigation />
            <PageHeader 
                img={img}
                title='Something for every style' />
            <ProductSection 
                title="Our selection of men's clothes"
                category="men's clothing"/>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: #F5EBE0;
`

export default MenClothes;