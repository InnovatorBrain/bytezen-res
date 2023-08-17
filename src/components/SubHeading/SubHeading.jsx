import React from 'react'
import './SubHeading.css'

const SubHeading = (props) => {
    return (
        <div className="heading__area">
            <hr className='feature__hr' />
            <h4 className='feature__hint'>{props.hint}</h4>
            <h1 className='feature__heading'>{props.title}</h1>
            <p className='feature__text'>{props.text}</p>
        </div>
    )
}

export default SubHeading