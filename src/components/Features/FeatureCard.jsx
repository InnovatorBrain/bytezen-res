import React from 'react'

const FeatureCard = (props) => {
    return (
        <div className="App__Features">
            <img src={props.image} alt="feature-1" className='Fe__image' />
            <h1 className='fe_title'>{props.title} </h1>
            <p className='fe__tex'>{props.description}</p>
        </div>
    )
}

export default FeatureCard