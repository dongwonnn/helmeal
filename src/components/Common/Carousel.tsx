import React, { FC } from 'react';
import { CarouselContainer, CarouselImage } from '../Detail/styles';
// import ScrollSpy from '../Detail/ScrollSpy';

const Carousel:FC = ({ children }) => {
  const img = children;
  return (
    <CarouselContainer>
      <CarouselImage>{img}</CarouselImage>
    </CarouselContainer>
  );
};

export default Carousel;
