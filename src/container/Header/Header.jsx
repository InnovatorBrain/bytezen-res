import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  useEffect(() => {
    const handleScrollClick = () => {
      window.scrollBy(0, 600);
    };

    const scrollElement = document.getElementById("scroll");
    if (scrollElement) {
      scrollElement.addEventListener("click", handleScrollClick);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("click", handleScrollClick);
      }
    };
  }, []);
  return (
    <>
      <div className='app__Header'>
        <div className='app__Header-image'>
          <div className='app__Header-overlay'>
            <hr className='Header__hr' />
            <p className='app__Heading-Text' id='app__Paragraph'>Hi, New Friends!</p>
            <h1 className='app__Heading-Text' id='app__Title'>Welcome To BytZen SeaFood</h1>
            <div className="app__Header-buttons">
              <Link to="/Book-Table" id="button-1">
                <button>
                  <span>Book Table</span>
                  <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                  </svg>
                </button>
              </Link>
              <Link to="/Menu" id="button-2">
                <button id='button-2'>
                  <span>Menu</span>
                  <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                  </svg>
                </button>
              </Link>

            </div>
            <div class="center">
              <svg width="30" height="100" viewBox="0 0 50 100" id="scroll">
                <rect x="10" y="5" rx="10" ry="10" width="30" height="50" stroke="var(--color-orange)" fill="transparent" stroke-width="3"></rect>
                <circle cx="25" cy="25" r="6" fill="var(--color-orange)" id="circle--shape"></circle>
              </svg>
            </div>


          </div>


        </div>
      </div>

    </>

  );
}

export default Header;
