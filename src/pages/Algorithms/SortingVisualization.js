import React from 'react';
import { getMergeSortAnimations, getQuickSortAnimations } from './SortingAlgorithm';
import './Visualizer.css';

// Change this value for the speed of the animations.
const DEFAULT_ANIMATION_SPEED = 100;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;
const barWidth = 660;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      userInput: '',
      animationSpeed: DEFAULT_ANIMATION_SPEED,
      widthCalculate: NUMBER_OF_ARRAY_BARS,
    };
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ userInput: event.target.value });
  }



  handleInputSubmit(event) {
    event.preventDefault();
    const { userInput } = this.state;
    const inputArray = userInput.split(',').map(Number);
    const array = inputArray.filter((value) => !isNaN(value));
    const NUMBER_OF_ARRAY_BARS = array.length;
    const widthCalculate = NUMBER_OF_ARRAY_BARS;

    this.setState({ array, widthCalculate });
  }

  handleSpeedChange(event) {
    const value = parseInt(event.target.value);
    this.setState({ animationSpeed: value });
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 100));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    const animationSpeed = this.state.animationSpeed;

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;

          // Add swap animation
          barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
          barOneStyle.height = `${newHeight}px`;

          // Add value inside the bar
          const valueElement = arrayBars[barOneIdx].querySelector('.value');
          valueElement.innerText = newHeight;
        }, i * animationSpeed);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    const animationSpeed = this.state.animationSpeed;

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;

          // Add swap animation
          barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
          barOneStyle.height = `${newHeight}px`;

          // Add value inside the bar
          const valueElement = arrayBars[barOneIdx].querySelector('.value');
          valueElement.innerText = newHeight;
        }, i * animationSpeed);
      }
    }
  }

  heapSort() {

  }

  bubbleSort() {

  }



  render() {
    const { array, userInput, animationSpeed, widthCalculate } = this.state;

    return (
      <div className="array-container">
        <div className='controls-container'>
          <form onSubmit={(event) => this.handleInputSubmit(event)}>
            <input
              className='array-input'
              type="text"
              value={userInput}
              onChange={(event) => this.handleInputChange(event)}
              placeholder="Enter atleast 5 numbers separated by commas"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => this.resetArray()}>Randomize Array</button>
          <br />
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <form>
            <label className='speed-change'>
              Animation Speed:

              <input
                type="radio"
                value="150"
                checked={animationSpeed === 150}
                onChange={this.handleSpeedChange}
              />
              1x

              <input
                type="radio"
                value="125"
                checked={animationSpeed === 125}
                onChange={this.handleSpeedChange}
              />
              2x

              <input
                type="radio"
                value="100"
                checked={animationSpeed === 100}
                onChange={this.handleSpeedChange}
              />
              3x

              <input
                type="radio"
                value="75"
                checked={animationSpeed === 75}
                onChange={this.handleSpeedChange}
              />
              4x

              <input
                type="radio"
                value="50"
                checked={animationSpeed === 50}
                onChange={this.handleSpeedChange}
              />
              5x
            </label>
          </form>
        </div>
        <div className='bar-container'>
          {array.map((value, idx,) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${barWidth / widthCalculate}px`,

              }}
            >
              <div className="value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
