import React, { useEffect } from 'react'
import './AboutUs.css'
import images from '../../constants/images'


const AboutUs = (props) => {
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
      <div className="AboutUs-container">
        <img src={images.AboutUs.AboutUsTop} alt="AboutUsTop Visiual" className='AboutUsTop-image' />
        <h1 className='AboutUs-title'>{props.title}</h1>

        {/* Scroll-Button */}
        <div class="center">
          <svg width="30" height="100" viewBox="0 0 50 100" id="scroll">
            <rect x="10" y="5" rx="10" ry="10" width="30" height="50" stroke="var(--color-orange)" fill="transparent" stroke-width="3"></rect>
            <circle cx="25" cy="25" r="6" fill="var(--color-orange)" id="circle--shape"></circle>
          </svg>
        </div>
      </div>

    </>
  )
}

export default AboutUs