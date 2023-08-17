import React from 'react';
import './Features.css';
import FeatureCard from './FeatureCard';
import DataFeatures from './DataFeatures';
import SubHeading from '../SubHeading/SubHeading';


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
            <SubHeading hint='Features' title='Why people choose us?' text='Unrivaled dining experience, where flavors meet unforgettable ambiance.' />
            <div className="cards__container">
                {cards}
            </div>
        </div>
    );
};

export default Features;
