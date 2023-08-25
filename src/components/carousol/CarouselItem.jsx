import React from "react";
import './newsCarousol.css'
export const CarouselItem = ({ item, width,isSelected }) => {
  return (
    <div className="carousel-item1" style={{ width: width,opacity:isSelected?1:0 }}>
      <div></div>
      <img className="carousel-img" src={item.img} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};