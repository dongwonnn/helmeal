import React, { FC } from 'react';
// import ScrollSpy from '../Detail/ScrollSpy';
import './Carousel.scss';

const Carousel:FC = ({ children }) => {
  const img = children;
  return (
    <div className="CarouselContainer">
      <div className="CarouselImage">{img}</div>
      {/* <ScrollSpy /> */}
    </div>
  );
};

export default Carousel;