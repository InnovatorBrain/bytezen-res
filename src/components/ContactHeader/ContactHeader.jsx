import React from 'react'
import './ContactHeader.css'
import { images } from '../../constants'
import { FaLocationArrow } from 'react-icons/fa'

const ContactHeader = () => {
    return (
        <>
            <div className="ContactHeader-container">
                <img src={images.ContactHeaderImage} alt="AboutUsTop Visiual" className='ContactHeader-image' />
                <h1 className='ContactHeader-title'><span id='Conatct-H-L'>Con</span><span id='Conatct-H-R'>tact</span></h1>
                <h1 className='ContactLocation-icon'><FaLocationArrow size={58}/></h1>

            </div>

        </>
    )
}

export default ContactHeader
