import React from 'react';
import Carousel from './components/Carousel';
import './App.scss';
interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
}
const images = [
  '../public/img/1.png',
  '../public/img/2.png',
  '../public/img/3.png',
  '../public/img/4.png',
  '../public/img/5.png',
  '../public/img/6.png',
  '../public/img/7.png',
  '../public/img/8.png',
  '../public/img/9.png',
  '../public/img/10.png',
];

class App extends React.Component<{}, State> {
  state = {
    images,
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { itemWidth, frameSize, step, animationDuration, infinite } =
      this.state;

    const onChangeImages = (
      prevState: State,
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      this.setState({
        ...prevState,
        [event.target.name]: +event.target.value,
      });
    };

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        {/*<h1>Carousel with {images.length} images</h1>*/}
        <h1 className="App__title" data-cy="title">
          Carousel has {images.length} images
        </h1>

        <Carousel
          images={images}
          itemWidth={itemWidth}
          frameSize={frameSize}
          step={step}
          animationDuration={animationDuration}
          infinite={infinite}
        />

        <form action="" className="App__form">
          <fieldset className="App__fieldset">
            <legend>Settings:</legend>
            <label htmlFor="itemId" className="App__form-item">
              Image size
              <input
                type="number"
                name="itemWidth"
                id="itemId"
                value={itemWidth}
                min={50}
                max={250}
                step={5}
                onChange={event => onChangeImages(this.state, event)}
              />
            </label>
            <label htmlFor="frameId" className="App__form-item">
              Frame size
              <input
                type="number"
                name="frameSize"
                id="frameId"
                value={frameSize}
                min={1}
                max={10}
                onChange={event => onChangeImages(this.state, event)}
              />
            </label>
            <label htmlFor="stepId" className="App__form-item">
              Step
              <input
                type="number"
                name="step"
                id="stepId"
                value={step}
                min={1}
                max={7}
                onChange={event => onChangeImages(this.state, event)}
              />
            </label>
            <label htmlFor="animationDuration" className="App__form-item">
              Animation duration
              <input
                type="number"
                name="animationDuration"
                id="animationDuration"
                value={animationDuration}
                min={700}
                max={3000}
                step={10}
                onChange={event => onChangeImages(this.state, event)}
              />
            </label>
            <label htmlFor="infinite" className="App__form-item">
              Infinite
              <input
                type="checkbox"
                name="infinite"
                id="infinite"
                onClick={() => this.setState({ infinite: !infinite })}
              />
            </label>
          </fieldset>
        </form>

        {/*<Carousel />*/}
      </div>
    );
  }
}
export default App;
