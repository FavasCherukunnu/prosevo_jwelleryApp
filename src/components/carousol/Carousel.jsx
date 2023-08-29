import React, { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import './newsCarousol.css'
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import axios from "axios";

//refer https://github.com/harakisgeorge/carouselreact
export const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(
    () => {

      const loadNew = async () => {

        try {
          const res = await axios.get('https://newsdata.io/api/1/news?apikey=pub_273555d0d6f13e01db9dfcb835a48541d1104&q=gold%20news&language=en&category=business');
          let item = res.data.results;
          item = item.filter(
            item=> item.description!==null
            )
            // setItems(res.data.results)
            console.log(item);
            setItems(item)
          setIsLoaded(true);
        }catch(err){
          console.log(err);
        }

      }

      loadNew();

    }
    , []
  )


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
      <div className="carousel1Inner">
        <h3 className="heading">Trending News</h3>
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

                  <div className="indicator-selected" style={{
                    backgroundColor: index === activeIndex ? 'var(--goldenButtonColor)' : 'white'

                  }} />

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
              <BiSolidRightArrow />
              {/* <span class="material-symbols-outlined">arrow_back_ios</span>{" "} */}
            </button>
            <button
              className="button-arrow"
              onClick={() => {
                dicrementIndex();
              }}
            >
              <BiSolidLeftArrow />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};