// #EDU
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  // ...
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  // ...
  return (
    visible ?

      <>
        <nav className='app__navbar'>
          <div className='app__navbar-logo'>
            <Link to="/Home">
              <img src={images.whiteRedLogo} alt='app logo' />
            </Link>
          </div>
          <ul className="app__navbar-links">
            <li className='p-links'><Link to="/Home">Home</Link></li>
            <li className='p-links'><Link to="/AboutUs">About Us</Link></li>
            <li className='p-links'><Link to="/Gallery">Gallery</Link></li>
            <li className='p-links'><Link to="/Menu">Menu</Link></li>
            <li className='p-links'><Link to="/Contact">Contact</Link></li>
            <li className='p-links'><Link to="/Shop">Shop</Link></li>
          </ul>
          <div className='app__navbar-login'>
            <Link to="/Cart" className='p-links' ><FaShoppingCart size={20} /></Link>
          </div>
          <div className='app__navbar-login'>
            <Link to="/Book-Table" className='p-links'>Book-Table</Link>
          </div>
          <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color="#DC5F00" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                <ul className="app__navbar-smallscreen_links">
                  <li><Link to="/Home" onClick={() => setToggleMenu(false)}>Home</Link></li>
                  <li><Link to="/AboutUs" onClick={() => setToggleMenu(false)}>AboutUs</Link></li>
                  <li><Link to="/Gallery" onClick={() => setToggleMenu(false)}>Gallery</Link></li>
                  <li><Link to="/Menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
                  <li><Link to="/Contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
                  <li><Link to="/Shop" onClick={() => setToggleMenu(false)}>Shop</Link></li>
                  <li id='app__login'>
                    <Link to="/Cart" className='p-links' onClick={() => setToggleMenu(false)}><FaShoppingCart size={20} /></Link>
                  </li>
                  <li id='app__table-cart'>
                    <Link to="/Book-Table" className='p-links' onClick={() => setToggleMenu(false)}>Book-Table</Link>
                  </li>
                </ul>


              </div>
            )}
          </div>
        </nav >
      </>
      : ""
  )
}

export default Navbar