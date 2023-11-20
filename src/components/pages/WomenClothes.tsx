import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'
import PageHeader from '../PageHeader'
import img from '../../resources/pexels-kevin-kabore-4966995.jpg'
import ProductSection from '../ProductSection'
import InspirationPicture from '../InspirationPicture'
import pic1 from '../../resources/pexels-mikotoraw-photographer-4132651.jpg'
import pic2 from '../../resources/pexels-evg-kowalievska-1381556.jpg'
import pic3 from '../../resources/pexels-brandon-t-leigh-3263460.jpg'

const WomenClothes = () => {
    return (
        <StyledMain>
            <Navigation />
            <PageHeader
                img={img}
                title='Clothes designed to make you look your best' />
            <ProductSection
                title="Our selection of women's clothes"
                category="women's clothing" />
            <h3>Inspiration from our customers</h3>
            <div className='inspiration'>
                <InspirationPicture
                    pic={pic1}
                    likes={43}
                    days={1}
                    username='ming.stella'
                    comment='&#128526;' />
                <InspirationPicture
                    pic={pic2}
                    likes={87}
                    days={3}
                    username='sweetellie'
                    comment='Keeping warm in my new coat' />
                <InspirationPicture
                    pic={pic3}
                    likes={26}
                    days={5}
                    username='brandi-jc'
                    comment='Roadtrip outfit' />
            </div>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background-color: #F5EBE0;

    .inspiration {
        padding: 5vh 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        background-color: #F5EBE0;
    }

    h3 {
        font-family: 'Kaisei Tokumin';
        font-size: 30px;
        margin-left: 5vw;
        margin-bottom: 10px;
    }
`

export default WomenClothes;