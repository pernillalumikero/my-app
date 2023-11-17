import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'

const Electronics = () => {
    return (
        <StyledMain>
            <Navigation />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: blue;
`

export default Electronics;