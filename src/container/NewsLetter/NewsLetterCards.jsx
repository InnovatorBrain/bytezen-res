import React from 'react'

const NewsLetterCards = (props) => {
    return (
        <div className="news--container">
            <img src={props.image} alt="newsletter visiual" className='news-Image' />
            <div className="news--text-container">

                <h1 className='news--title'>{props.title}</h1>
                <p className='news--text'>{props.description}</p>
                <div className="news--ref-container">
                    <div className="news--ref-image-cont">
                        <img src={props.imagee} alt="ref-visiual" className='news--ref-image' />
                        <p className='news--ref-name'>{props.refName}</p>
                        <div className="news--ref-time">{props.time}</div>
                    </div>
                </div>

            </div>
            {/* <div className="news-category">
                    <p className='news--category-name'>{props.category}</p>
                </div> */}
        </div>
    )
}
export default NewsLetterCards