import React from 'react'
import './ProductCard.css'
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = (props) => {
    let newsLetterBadge = props.category;
    if (newsLetterBadge === 'DESERTS, SALADS') {
        newsLetterBadge = 'DESERTS, SALADS'
    }
    else if (newsLetterBadge === 'BREAKFAST, LUNCH, DINNER') {
        newsLetterBadge = 'BREAKFAST, LUNCH, DINNER'
    }
    else if (newsLetterBadge === 'DESERTS') {
        newsLetterBadge = 'DESERTS'
    }
    else { }
    return (
        <>
            <div className="product--container">
                {newsLetterBadge && <button className="product--badge">{newsLetterBadge}</button>}
                <img src={props.image} alt="product visiual" className='product-Image' />
                <div className="product--text-container">

                    <h1 className='product--title'>{props.title}</h1>
                    <div className="product--ref-container">
                        <div className="product--ref-image-cont">
                            <div className="product--ref-pp">{props.preprice}</div>
                            <p className='product--ref-p'>{props.price}</p>
                            <div className="product--ref-cart"><FaCartPlus size={35}/></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ProductCard;