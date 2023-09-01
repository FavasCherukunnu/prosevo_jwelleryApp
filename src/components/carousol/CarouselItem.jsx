import React from "react";
import './newsCarousol.css'
export const CarouselItem = ({ item, width, isSelected }) => {
  console.log(item);
  return (
    <div className="carousel-item1" style={{ width: width, opacity: isSelected ? 1 : 0,zIndex: isSelected ? 0 : -1 }}>
      {/* <div></div> */}
      {
        item.image_url
          ?
          <img className="carousel-img" src={item.image_url} />
          : null
      }
      <div style={{position:'relative'}}>
        <div className="carousel-item-text">
          {item.description}
        </div>
        <a href={item.link} style={{ position: 'absolute', bottom: '-15px', left: '30px' }}>
          read More
        </a>
      </div>
    </div>
  );
};