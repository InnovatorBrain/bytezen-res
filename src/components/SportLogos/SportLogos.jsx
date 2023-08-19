import React from 'react'
import './SportLogos.css'
import { images } from '../../constants'

const SportLogos = () => {
    return (
        <>
            <div className="sport-container">
                <div className="Sport-image-cont">
                    <img src={images.SportsLogos.SportLogo1} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>HTFG 2023</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.SportsLogos.SportLogo2} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>HTF 2022</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.SportsLogos.SportLogo3} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>GFA 2021</p>
                </div>
                <div className="Sport-image-cont">
                    <img src={images.SportsLogos.SportLogo4} alt="SportVisiual" className='SportLogo' />
                    <p className='Sport-text'>LUA 2023</p>
                </div>
            </div>
        </>

    )
}

export default SportLogos