import React from 'react'
import './ContactMain.css'
import { images } from '../../constants'

const ContactMain = () => {
    return (
        <>
            <div className="ContactInput-main">
                <div className="ContactInput-container">
                    <form className="form">
                        <label>
                            <input required placeholder="" type="tel" className="input" />
                            <span>Name</span>
                        </label>

                        <label>
                            <input required placeholder="" type="email" className="input" />
                            <span>Email</span>
                        </label>

                        <label>
                            <input required type="number" placeholder="" className="input" />
                            <span>contact number</span>
                        </label>
                        <label>
                            <input required type="tel" placeholder="" className="input" id='input-msg' />
                            <span>Message</span>
                        </label>



                        <button className="fancy" href="#">
                            <span className="top-key"></span>
                            <span className="text">submit</span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </button>
                    </form>
                </div>

                <img src={images.ContactHeaderImage_} alt="Contact-input-Visiual" className='Contact-input-image' />


            </div>
        </>
    )
}

export default ContactMain