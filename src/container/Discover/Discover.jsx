import React from 'react'
import './Discover.css'
import { images } from '../../constants'
import { Link } from 'react-router-dom'

const Discover = () => {
    return (
        <>
            <div className="subHeadingContainer">
                <div className='subheading__Text-container'>
                    <h1 className='subheading-title'>Discover a sublime dining
                        <img src={images.underLine} alt="UnderLine" className='subheading-img' />
                    </h1>

                    <p className='subheading-text'>
                        Nestled in the heart of nature's embrace, our restaurant's story is a symphony of flavors and enchantment. Each dish is a masterpiece, crafted with passion and precision, dancing on the palate like poetry. As the sun paints the horizon with hues of gold, indulge in a culinary journey that whispers the tale of the land, the love of food, and the art of dining. Join us, where every bite is a chapter in the story of gastronomic delight.</p>
                    <Link to="/Shop">
                        <button className='subheading-button'>
                            Shop.
                        </button>
                    </Link>

                </div>
                <img src={images.DiscoverImage} className='subheading-img' alt="GridImages" />
            </div>
        </>

    )
}

export default Discover;