import React from 'react'
import './BookTable.css'

const BookTable = () => {
    return (
        <form className="form">
            <div className="flex">
                <label>
                    <input required placeholder="" type="text" className="input" />
                    <span>Name</span>
                </label>

                <label>
                    <input required placeholder="" type="number" className="input" />
                    <span>Person</span>
                </label>
            </div>

            <label>
                <input required placeholder="" type="email" className="input" />
                <span>Email</span>
            </label>

            <label>
                <input required type="tel" placeholder="" className="input" />
                <span>contact number</span>
            </label>
            <label>
                <input required type="date" placeholder="" className="input" />
                <span></span>
            </label>



            <button className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">submit</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </button>
        </form>
    );
}

export default BookTable