import React from 'react';
import './Features.css';
import FeatureCard from './FeatureCard';
import DataFeatures from './DataFeatures';


const Features = () => {
    const cards = DataFeatures.map(item => (
        <FeatureCard
            image={item.Image}
            title={item.title}
            description={item.description}
        />
    ));

    return (
        <div className='Features__container'>
            <div className="heading__area">
                <hr className='feature__hr' />
                <h4 className='feature__hint'>Features</h4>
                <h1 className='feature__heading'>Why people choose us?</h1>
                <p className='feature__text'>Porro eveniet, autem ipsam vitae consequatur!</p>
            </div>
            {cards}
        </div>
    );
};

export default Features;
