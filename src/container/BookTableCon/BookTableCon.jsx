import React from 'react'
import BookTable from '../../components/BookTable/BookTable'
import { images } from '../../constants'
import './BookTableCon.css'


const BookTableCon = () => {
    return (
        <>
            <div className='BookTableCon--container'>
                <img src={images.BookTableImage} alt="Book Table side visiual" className='BookTable-image' />
                <div className="BookTableRightSide">
                    <BookTable />
                </div>
            </div>
        </>
    )
}

export default BookTableCon