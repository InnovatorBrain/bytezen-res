import React from 'react'

const FeatureCard = (props) => {
    return (
        <div className="App__Features">

            <img src={props.Image} alt="feature-1" />
            <h4 className='feature_'>{props.title}</h4>
            <p className='feature__tex'>{props.description}</p>

        </div>
    )
}

export default FeatureCard