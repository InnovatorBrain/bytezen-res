import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import images from '../../constants/images';
import MenuCardsItems from '../../constants/data';
import MenuCard from './MenuCard';

const Menu = () => {
  const menuCards = MenuCardsItems.map((item) => ({
    ...item,
    key: item.id,
    image: item.img,
    title: item.title,
    description: item.description,
    price: item.price,
  }));

  // Rest of your component logic

  return (
    <>
      <div className="menu--Container">
        <div className="menu--Image">
          <div className="menu--Overlay">
            <div className="menu--Heading">
              <h4 className='menu__hint'>Your Choice</h4>
              <h1 className='menu__heading'>Check Our Menu</h1>
              <div className="menu--icons">
                <Link to="" className="menu--icon-div">
                  <img src={images.MenuIcons.MenuIcon1} alt="Icon One" className='menu--icon' />
                  <h3>STARTERS</h3>
                </Link>
                <Link to="" className="menu--icon-div">
                  <img src={images.MenuIcons.MenuIcon2} alt="Icon Two" className='menu--icon' />
                  <h3>BREAKFAST</h3>
                </Link>
                <Link to="" className="menu--icon-div">
                  <img src={images.MenuIcons.MenuIcon3} alt="Icon Three" className='menu--icon' />
                  <h3>LUNCH</h3>
                </Link>
                <Link to="" className="menu--icon-div">
                  <img src={images.MenuIcons.MenuIcon4} alt="Icon Four" className='menu--icon' />
                  <h3>DINNER</h3>
                </Link>
              </div>
            </div>

          </div>

        </div>
        {/* CARDS ARE HERE */}
        <MenuCard ComProps={menuCards} />
      </div>

    </>

  );
};

export default Menu;
