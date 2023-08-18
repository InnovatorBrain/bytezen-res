import React, { useEffect, useState } from 'react';
import './AnimeCounter.css'; // Make sure to import your CSS file

const Counter = ({ initialValue, value, duration, label, valueSign }) => {
    const [currentValue, setCurrentValue] = useState(initialValue);

    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + duration;

        const animate = () => {
            const now = Date.now();
            const elapsedTime = now - startTime;
            const progress = Math.min(1, elapsedTime / duration);

            const animatedValue = Math.floor(initialValue + progress * (value - initialValue));
            setCurrentValue(animatedValue);

            if (now < endTime) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [initialValue, value, duration]);

    return (
        <>
            <div className="counter">
                <div className="CounterUpLine">
                    <div className="value" akhi={value}>{currentValue}</div>
                    <div className="valueSign">{valueSign}</div>
                </div>
                <div className="label">{label}</div>

            </div>
        </>
    );
};

const AnimeCounter = () => {
    const countersData = [
        { value: 500, label: 'VISITORS DAILY', valueSign: '+' },
        { value: 800, label: 'DELIVERIES MONTHLY', valueSign: '+' },
        { value: 100, label: 'POSITIVE FEEDBACK', valueSign: '%' },
        { value: 70, label: 'AWARDS AND HONORS', valueSign: '+' }
    ];
    const duration = 5000; // 5000 milliseconds (5 seconds)

    return (
        <>
        <hr className='Counter_hr'/>
        <div className="Content">
            
            {countersData.map((counterData, index) => (
                <Counter
                    key={index}
                    label={counterData.label}
                    initialValue={0}
                    value={counterData.value}
                    duration={duration}
                    valueSign={counterData.valueSign} // Pass valueSign to Counter component
                />
            ))}
        </div>
        </>
    );
};

export default AnimeCounter;
