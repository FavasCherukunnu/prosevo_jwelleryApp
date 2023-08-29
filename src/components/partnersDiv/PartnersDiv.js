import './partnersDiv.css'
import React, { useState, useRef } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
// Slide Component
const Slide = ({ slide, current, handleSlideClick }) => {
    const slideRef = useRef(null);

    const handleMouseMove = (event) => {
        const el = slideRef.current;
        const r = el.getBoundingClientRect();

        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
    };

    const handleMouseLeave = () => {
        slideRef.current.style.setProperty('--x', 0);
        slideRef.current.style.setProperty('--y', 0);
    };

    const imageLoaded = (event) => {
        event.target.style.opacity = 1;
    };

    const classNames = `slide ${current === slide.index ? 'slide--current' :
        current - 1 === slide.index ? 'slide--previous' :
            current + 1 === slide.index ? 'slide--next' : ''}`;

    return (
        <li
            ref={slideRef}
            className={classNames}
            onClick={() => handleSlideClick(slide.index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="slide__image-wrapper">
                <img
                    className="slide__image"
                    alt={slide.headline}
                    src={slide.src}
                    onLoad={imageLoaded}
                />
            </div>

            <article className="slide__content">
                <h2 className="slide__headline">{slide.headline}</h2>
                <button className="slide__action btn">{slide.button}</button>
            </article>
        </li>
    );
};

// Slider Control Component
const SliderControl = ({ type, title, handleClick }) => {
    return (
        <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
            {
                type === 'next'
                    ?
                    <MdArrowForwardIos className='icon' />
                    :
                    <MdArrowBackIosNew className='icon' />
            }
        </button>
    );
};

// Slider Component
export const Slider = ({ slides, heading, title }) => {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const wrapperTransform = { transform: `translateX(-${current * (100 / slides.length)}%)` };

    return (
        <div className='partnersDiv'>
            {title ? <h3 className="heading">{title}</h3> : null}
            <div className='partnerInnerDiv'>
                <div className='slider'>
                    <ul className="slider__wrapper" style={wrapperTransform}>
                        <h3 id={`slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`} className="visuallyhidden">{heading}</h3>

                        {slides.map((slide) => (
                            <Slide
                                key={slide.index}
                                slide={slide}
                                current={current}
                                handleSlideClick={handleSlideClick}
                            />
                        ))}
                    </ul>

                </div>
                <div className="slider__controls">
                    <SliderControl
                        type="previous"
                        title="Go to previous slide"
                        handleClick={handlePreviousClick}
                    />

                    <SliderControl
                        type="next"
                        title="Go to next slide"
                        handleClick={handleNextClick}
                    />
                </div>
            </div>
        </div>
    );
};
