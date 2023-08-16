import React from 'react';
import './Menu.css';
import images from '../../constants/images';

const Menu = () => {
  return (
    <div className="menu--Container">
      <div className="menu--Image">
        <div className="menu--Overlay">
          <div className="menu--Heading">
            <h4 className='menu__hint'>Your Choice</h4>
            <h1 className='menu__heading'>Check Our Menu</h1>
            <div className="menu--icons">
              <div className="menu--icon-div">
                <img src={images.MenuIcons.MenuIcon1} alt="Icon One" className='menu--icon' />
                <h3>STARTERS</h3>
              </div>
              <div className="menu--icon-div">
                <img src={images.MenuIcons.MenuIcon2} alt="Icon Two" className='menu--icon' />
                <h3>BREAKFAST</h3>
              </div>
              <div className="menu--icon-div">
                <img src={images.MenuIcons.MenuIcon3} alt="Icon Three" className='menu--icon' />
                <h3>LUNCH</h3>
              </div>
              <div className="menu--icon-div">
                <img src={images.MenuIcons.MenuIcon4} alt="Icon Four" className='menu--icon' />
                <h3>DINNER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
