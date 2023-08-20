import React from 'react'
// I am using Same CSS of SportLogos becuase it import same here
import '../SportLogos/SportLogos.css'

import images from '../../constants/images'

const Contactways = () => {
  return (
    <>
    <div className="sport-container">
        <div className="Sport-image-cont">
            <img src={images.ContactWays.Contactways1} alt="SportVisiual" className='SportLogo' />
            <p className='Sport-text'>Toronto, North Avenue 31B</p>
        </div>
        <div className="Sport-image-cont">
            <img src={images.ContactWays.Contactways2} alt="SportVisiual" className='SportLogo' />
            <p className='Sport-text'>info@tastyc.com</p>
        </div>
        <div className="Sport-image-cont">
            <img src={images.ContactWays.Contactways3} alt="SportVisiual" className='SportLogo' />
            <p className='Sport-text'>Snow-Angel</p>
        </div>
        <div className="Sport-image-cont">
            <img src={images.ContactWays.Contactways4} alt="SportVisiual" className='SportLogo' />
            <p className='Sport-text'>+76 (094) 754 43 77</p>
        </div>
    </div>
</>
  )
}

export default Contactways