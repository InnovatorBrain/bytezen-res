import React from 'react'
import MenuitemsCard from './MenuitemsCard'
import MenuitemsData from '../../constants/MenuitemsData'
import MenuitemsData_ from '../../constants/MenuitemsData_'
import SubHeading from '../SubHeading/SubHeading'

const Menuitem = () => {
  const MenuitemCards = MenuitemsData.map(item => (
    <MenuitemsCard
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
    />
  ));
  const MenuitemCards_ = MenuitemsData_.map(item => (
    <MenuitemsCard
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
    />
  ));

  return (
    <>
      <div className="MenuitemsCard-container">
        {MenuitemCards}
      </div>
      <SubHeading hint = "Chef's Special Creations" title='Savory Delights' text= "Indulge in our selection of mouthwatering dishes crafted with the finest ingredients, delivering a symphony of flavors that will delight your senses."/>
      <div className="MenuitemsCard-container">
        {MenuitemCards_}
      </div>
    </>

  )
}

export default Menuitem