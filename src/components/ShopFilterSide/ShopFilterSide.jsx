import React from 'react'
import './ShopFilterSide.css'
// import ProductData from '../../constants/Product'

const ShopFilterSide = () => {
    return (
        <>
            <div className="product-filter-container">
                {/* Search */}
                <div className="groupp">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="iconn">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input className="inputt" type="search" placeholder="Search" />
                </div>
                {/* Categories */}
                <div className="filter-category-container">
                    <button id='product-category-filter'>
                        <p className='product-all-'> Appetizers <span className='filter-category-count'> (11) </span> </p>
                    </button>
                    <button id='product-category-filter'>
                        <p className='product-all-'> Entrees <span className='filter-category-count'> (15) </span> </p>
                    </button>
                    <button id='product-category-filter'>
                        <p className='product-all-'> Desserts <span className='filter-category-count'> (8) </span></p>
                    </button>

                </div>
                {/* The tage Names of product to show on another page */}
                <span className="product-tag-container">
                    <div className="product-tag">
                        <p className='tagname'>Cafe</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>CHOCOLATE</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>Cake</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>Fastfood</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>sea</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>meat</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>oragnic</p>
                    </div>
                    <div className="product-tag">
                        <p className='tagname'>soup</p>
                    </div>
              
                </span>

            </div>

        </>
    )
}

export default ShopFilterSide