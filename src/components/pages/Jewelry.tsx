import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import inspoimg1 from '../../resources/pexels-lucas-pezeta-3081390.jpg'
import Navigation from '../Navigation'
import ProductHorizontalScroll from '../ProductHorizontalScroll'
import pic1 from '../../resources/pexels-jenny-uhling-4321328.jpg'
import pic2 from '../../resources/pexels-monstera-production-5876695.jpg'
import pic3 from '../../resources/pexels-elvir-novruzov-18996244.jpg'
import InspirationPicture from '../InspirationPicture'
import PageHeader from '../PageHeader'
import ProductSection from '../ProductSection'

const Jewelry = () => {

    return (
        <StyledMain>
            <Navigation />
            <PageHeader 
                img={inspoimg1}
                title='Jewelry for all occasions' />
            <ProductSection
                title='Our jewelry selection'
                category='jewelery'/>
            <h3>Inspiration from our customers</h3>
            <div className='inspiration'>
                <InspirationPicture
                    pic={pic1}
                    likes={63}
                    days={2}
                    username='kelleysmith'
                    comment='So beautiful &#128525;' />
                <InspirationPicture
                    pic={pic2}
                    likes={34}
                    days={5}
                    username='jenny87'
                    comment='Recived my necklace today!' />
                <InspirationPicture
                    pic={pic3}
                    likes={268}
                    days={7}
                    username='blue-moon'
                    comment='Perfect for my special day &#128112; &#129392;' />
            </div>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: #F5EBE0;

    h2 {
        font-family: 'Kulim Park';
        font-size: 32px;
    }

    h3 {
        font-family: 'Kaisei Tokumin';
        font-size: 30px;
        margin-left: 5vw;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
    }

    .inspiration {
        padding: 5vh 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        background-color: #F5EBE0;
    }

`

export default Jewelry;