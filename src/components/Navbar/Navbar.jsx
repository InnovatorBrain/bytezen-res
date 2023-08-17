// #EDU
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css'
import images from '../../constants/images'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (

    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.whiteRedLogo} alt='app logo' />
        </div>
        <ul className="app__navbar-links">
          <li className='p-links'><a href="/Home">Home</a></li>
          <li className='p-links'><a href="/AboutUs">About Us</a></li>
          <li className='p-links'><a href="/Gallery">Gallery</a></li>
          <li className='p-links'><a href="/Menu">Menu</a></li>
          <li className='p-links'><a href="/Contact">Contact</a></li>
          <li className='p-links'><a href="/Shop">Shop</a></li>
        </ul>
        <div className='app__navbar-login'>
          <a href="/Login" className='p-links'>Login</a>
        </div>
        <div className='app__navbar-login'>
          <a href="/Table-cart" className='p-links'>Table-Cart</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#DC5F00" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="/Home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="/AboutUs" onClick={() => setToggleMenu(false)}>AboutUs</a></li>
                <li><a href="/Gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
                <li><a href="/Menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="/Contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                <li><a href="/Shop" onClick={() => setToggleMenu(false)}>Shop</a></li>
                <li id='app__login'>
                  <a href="/Login" className='p-links' onClick={() => setToggleMenu(false)}>Login</a>
                </li>
                <li id='app__table-cart'>
                  <a href="/Table-cart" className='p-links' onClick={() => setToggleMenu(false)}>Table-Cart</a>
                </li>
              </ul>


            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar