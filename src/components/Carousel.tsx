import React from 'react';
import { useState } from 'react';
import './Carousel.scss';
import { CarouselCard } from './CarouselCard/CarouselCard';

/* const Carousel: React.FC = () => (
  <div className="Carousel">
    <ul className="Carousel__list">
      <li>
        <img src="./img/1.png" alt="1" />
      </li>
      <li>
        <img src="./img/1.png" alt="2" />
      </li>
      <li>
        <img src="./img/1.png" alt="3" />
      </li>
      <li>
        <img src="./img/1.png" alt="4" />
      </li>
    </ul>

    <button type="button">Prev</button>
    <button type="button">Next</button>
  </div>
);
*/
type Prop = {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Prop> = ({
  images,
  itemWidth,
  frameSize,
  step,
  animationDuration,
  infinite,
}) => {
  const [currentImg, setCurrentImage] = useState(1);
  const maxCurrentImage =
    Math.min(images.length - frameSize, images.length - step) + 1;

  const moveImages = (s: number) => {
    if (infinite) {
      switch (true) {
        case currentImg === maxCurrentImage && currentImg + s > maxCurrentImage:
          setCurrentImage(1);
          break;

        case currentImg === 1 && currentImg + s < 1:
          setCurrentImage(maxCurrentImage);
          break;

        case currentImg + s > maxCurrentImage:
          setCurrentImage(maxCurrentImage);
          break;

        case currentImg + s < 1:
          setCurrentImage(1);
          break;

        default:
          setCurrentImage(currentImg + s);
      }
    } else {
      switch (true) {
        case currentImg + s > maxCurrentImage:
          setCurrentImage(maxCurrentImage);
          break;

        case currentImg + s < 1:
          setCurrentImage(1);
          break;

        default:
          setCurrentImage(currentImg + s);
      }
    }
  };

  return (
    <div className="Carousel" data-cy="title">
      <div
        className="Carousel__container"
        style={{
          width: `${itemWidth * frameSize}px`,
        }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(-${(currentImg - 1) * itemWidth}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((image, i) => (
            <CarouselCard
              image={image}
              key={i}
              itemWidth={itemWidth}
              imageNumber={i}
            />
          ))}
          {/* <li key={image}>
                <img
                  src={image}
                  alt={`emoji${i}`}
                  className="Carousel__img"
                  style={{
                    width: `${itemWidth}px`,
                    height: `${itemWidth}px`,
                  }}
                />
              </li> */}
        </ul>
      </div>

      <div className="Carousel__buttons">
        <button
          type="button"
          disabled={currentImg === 1 && !infinite}
          onClick={() => moveImages(-step)}
        >
          Prev
        </button>
        <button
          type="button"
          disabled={currentImg === maxCurrentImage && !infinite}
          onClick={() => moveImages(step)}
          data-cy="next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
