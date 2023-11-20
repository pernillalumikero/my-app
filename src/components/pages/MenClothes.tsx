import React from 'react'
import styled from 'styled-components'
import PageHeader from '../PageHeader'
import img from '../../resources/pexels-keith-lobo-3907595.jpg'
import Navigation from '../Navigation'
import ProductSection from '../ProductSection'
import InspirationPicture from '../InspirationPicture'
import pic1 from '../../resources/pexels-zachary-debottis-3216909.jpg'
import pic2 from '../../resources/pexels-key-notez-1787491.jpg'
import pic3 from '../../resources/pexels-francesco-paggiaro-581087.jpg'

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
            <h3>Inspiration from our customers</h3>
            <div className='inspiration'>
                <InspirationPicture
                    pic={pic1}
                    likes={61}
                    days={1}
                    username='123wizard'
                    comment='New backpack' />
                <InspirationPicture
                    pic={pic2}
                    likes={104}
                    days={4}
                    username='james_zack'
                    comment='&#128526;' />
                <InspirationPicture
                    pic={pic3}
                    likes={23}
                    days={5}
                    username='buster.cool'
                    comment='Thank you' />
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

export default MenClothes;