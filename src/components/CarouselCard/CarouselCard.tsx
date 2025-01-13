import React from 'react';
import './CarouselCard.scss';
type Props = {
  image: string;
  itemWidth: number;
  imageNumber: number;
};
export const CarouselCard: React.FC<Props> = ({
  image,
  itemWidth,
  imageNumber,
}) => (
  <li>
    <img
      src={image}
      alt={`emoji${imageNumber}`}
      className="Carousel__img"
      style={{
        width: `${itemWidth}px`,
        height: `${itemWidth}px`,
      }}
    />
  </li>
);
