import React, { useState, useRef } from 'react';
import './Menu.css';

const MenuCard = ({ ComProps }) => {
    const [activeButton, setActiveButton] = useState('first');
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragX, setDragX] = useState(0);
    const [carouselPosition, setCarouselPosition] = useState(0);

    const carouselRef = useRef(null);

    const handleButtonClick = (buttonClass) => {
        setActiveButton(buttonClass);
        const position = {
            first: 0,
            second: -33.33333333333333,
            third: -66.6666666667,
        };
        setCarouselPosition(position[buttonClass]);
    };

    const handleDragStart = (e) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
    };

    const handleDrag = (e) => {
        if (!isDragging) return;

        const dragDelta = e.clientX - dragStartX;
        setDragX(dragDelta);
    };

    const handleDragEnd = () => {
        setIsDragging(false);

        const carouselWidth = carouselRef.current.offsetWidth;
        const carouselItemWidth = carouselWidth / ComProps.length;
        const dragThreshold = carouselItemWidth * 0.15;

        if (dragX > dragThreshold) {
            if (activeButton !== 'first') {
                handleButtonClick('first');
            }
        } else if (dragX < -dragThreshold) {
            if (activeButton !== 'third') {
                handleButtonClick('third');
            }
        } else {
            if (activeButton !== 'second') {
                handleButtonClick('second');
            }
        }

        setDragX(0);
    };

    return (
        <div className="menu--Card-Container">
            <div className="center">
                <div className="wrapper">
                    <div
                        className="inner"
                        ref={carouselRef}
                        style={{ transform: `translateX(${carouselPosition + dragX}%)` }}
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDrag}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                    >
                        {ComProps.map((item) => (
                            <div key={item.key} className="card">
                                <img src={item.image} alt="Card Item" className='menu--card-image' />
                                <div className="content">
                                    <h1 className='menu--card-title'>{item.title}</h1>
                                    <h3 className='menu--card-description'>{item.description}</h3>
                                    <h3 className='menu--card-price'>{item.price}</h3>
                                    <button className='menu--card-button'>
                                        Order Now.
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ... */}

                <div className="map">
                    <button
                        className={`first ${activeButton === 'first' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('first')}
                    ></button>
                    <button
                        className={`second ${activeButton === 'second' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('second')}
                    ></button>
                    <button
                        className={`third ${activeButton === 'third' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('third')}
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
