import React from 'react'
import './NewsLetter.css'
import NewsLetterCards from './NewsLetterCards'
import SubHeading from '../../components/SubHeading/SubHeading'
import NewsLetterData from '../../constants/NewsLetterData'

const NewsLetter = () => {
    const NewsCards = NewsLetterData.map((item) => (
        <NewsLetterCards
            image={item.image}
            title={item.title}
            description={item.description}
            imagee={item.imagee}
            category={item.category}
            refName={item.refName}
            time={item.time}
        />
    ))
    return (
        <div className='testimonial__container'>
            {/* Comp_Subheading  */}
            <SubHeading hint="NewsLetter" title='Use the Tips of Our Chefs' text='Porro eveniet, autem ipsam corrupti consectetur cum.
Repudiandae dignissimos fugiat sit nam.'/>

            {/* _CardSliderCont  */}
            <div className='News--Cards-Container'>
                {NewsCards}
            </div>

        </div>


    )
}

export default NewsLetter