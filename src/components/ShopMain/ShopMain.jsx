import React from 'react'
import './ShopMain.css'
import ShopFilterSide from '../ShopFilterSide/ShopFilterSide'
import ProductCard from '../ProcuctCard/ProductCard'
import ProductData from '../../constants/Product'

const ShopMain = () => {
    const ProductCards = ProductData.map((item) => (
        <ProductCard
            image={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            preprice={item.preprice}
        />
    ))

    return (
        <>
            <div className="Shop-container">
                <div className="Shop-left">
                    <ShopFilterSide />
                </div>
                <div className="Shop-right">
                    <div>
                        <h1 className='shop-title'>Shop.</h1>
                    </div>

                    {/* Product Card */}
                    <div className="Product-Container">
                        {ProductCards}
                    </div>



                </div>
            </div>

        </>
    )
}

export default ShopMain