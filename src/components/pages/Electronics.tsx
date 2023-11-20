import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'
import PageHeader from '../PageHeader'
import img from '../../resources/pexels-sound-on-3755931.jpg'
import ProductSection from '../ProductSection'
import InspirationPicture from '../InspirationPicture'
import pic1 from '../../resources/pexels-karolina-grabowska-4195325.jpg'
import pic2 from '../../resources/pexels-tranmautritam-326508.jpg'
import pic3 from '../../resources/pexels-jose-fernandez-12804205.jpg'

const Electronics = () => {
    return (
        <StyledMain>
            <Navigation />
            <PageHeader
                title="Why shouldn't your electronics be as stylish as you?"
                img={img} />
            <ProductSection
                title='Our selection of electronics'
                category='electronics' />
            <h3>Inspiration from our customers</h3>
            <div className='inspiration'>
                <InspirationPicture
                    pic={pic1}
                    likes={34}
                    days={3}
                    username='misstwiggy'
                    comment='New headphones from' />
                <InspirationPicture
                    pic={pic2}
                    likes={18}
                    days={4}
                    username='brittney.tinker_bell'
                    comment='Check out my new homeoffice!' />
                <InspirationPicture
                    pic={pic3}
                    likes={84}
                    days={7}
                    username='j0s3'
                    comment='First pic with new camera' />
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

export default Electronics;