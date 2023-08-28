import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import './newsCarousol.css'
import { BiSolidRightArrow,BiSolidLeftArrow } from 'react-icons/bi';

//refer https://github.com/harakisgeorge/carouselreact
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      img: 'https://asia.omsystem.com/content/000107506.jpg',
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      img: 'https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg',
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      img: 'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg',
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const incrimentIndex = () => {

    if (activeIndex >= items.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }

  }

  const dicrementIndex = () => {

    if (activeIndex <= 0) {
      setActiveIndex(items.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }

  }

  return (
    <div className="carousel1">
      <div
        className="inner"

      >
        {items.map((item, index) => {
          return <CarouselItem key={index} isSelected={index === activeIndex} item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">

        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
              >
                {/* <span
                  className={`material-symbols-outlined`}
                >
                  {index === activeIndex ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span> */}
                <div className="indicator-selected" style={{
                  backgroundColor: index===activeIndex?'var(--goldenButtonColor)':'white'

                  }}/>

              </button>
            );
          })}
        </div>
        <div className="button-arrow-div">
          <button
            className="button-arrow"
            onClick={() => {
              incrimentIndex()
            }}
          >
            <BiSolidRightArrow/>
            {/* <span class="material-symbols-outlined">arrow_back_ios</span>{" "} */}
          </button>
          <button
            className="button-arrow"
            onClick={() => {
              dicrementIndex();
            }}
          >
            <BiSolidLeftArrow/>
          </button>
            
        </div>
      </div>
    </div>
  );
};