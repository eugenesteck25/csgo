import React from 'react';
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getBubbleSortAnimations,
  getHeapSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations
} from './SortingAlgorithm';
import './Visualizer.css';

// Change this value for the speed of the animations.
const DEFAULT_ANIMATION_SPEED = 300;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 20;
const barWidth = 660;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const FINISHED_COLOR = 'limegreen';

export default class SortingVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      userInput: '',
      animationSpeed: DEFAULT_ANIMATION_SPEED,
      widthCalculate: NUMBER_OF_ARRAY_BARS,
      isSorting: false,
    };

    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const bars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(10, 300));
    }

    this.setState({ array });

    setTimeout(() => {
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        const barStyle = bars[i].style;
        barStyle.backgroundColor = PRIMARY_COLOR;
      }
    }, 0);
  }


  // sorting implementations
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    const animationSpeed = this.state.animationSpeed;
    const arrayBars = document.getElementsByClassName('array-bar');

    const animationSpeedFactor = 1;

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed * animationSpeedFactor);
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
        }, i * animationSpeed * animationSpeedFactor);
      }
    }

    // Change the color of bars to FINISHED_COLOR after sorting is finished
    setTimeout(() => {
      for (let i = 0; i < arrayBars.length; i++) {
        const barStyle = arrayBars[i].style;
        barStyle.backgroundColor = FINISHED_COLOR;
      }
    }, animations.length * animationSpeed * animationSpeedFactor);
  }

  quickSort() {
    const { array } = this.state;
    const animations = [];
    getQuickSortAnimations(array, 0, array.length - 1, animations);
    const animationSpeed = this.state.animationSpeed;
    const bars = document.getElementsByClassName('array-bar');

    const animationSpeedFactor = 1;


    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, newArray] = animations[i];
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;

      setTimeout(() => {
        const valueElement1 = bars[barOneIdx].querySelector('.value');
        const valueElement2 = bars[barTwoIdx].querySelector('.value');

        barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
        barTwoStyle.transition = `height ${animationSpeed}ms ease-in-out`;

        valueElement1.innerText = newArray[barOneIdx];
        valueElement2.innerText = newArray[barTwoIdx];

        barOneStyle.height = `${newArray[barOneIdx]}px`;
        barTwoStyle.height = `${newArray[barTwoIdx]}px`;
      }, i * animationSpeedFactor * animationSpeed);

      setTimeout(() => {
        if (i === animations.length - 1) {
          setTimeout(() => {
            for (let j = 0; j < bars.length; j++) {
              const barStyle = bars[j].style;
              barStyle.backgroundColor = FINISHED_COLOR;
            }
          }, i * animationSpeedFactor * animationSpeed);
        }
      }, animationSpeedFactor * animationSpeed);
    }
  }

  heapSort() {
    const { array } = this.state;
    const animations = getHeapSortAnimations(array);
    const animationSpeed = this.state.animationSpeed;
    const bars = document.getElementsByClassName('array-bar');

    const animationSpeedFactor = 1;

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;

      setTimeout(() => {
        const valueElement1 = bars[barOneIdx].querySelector('.value');
        const valueElement2 = bars[barTwoIdx].querySelector('.value');

        barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
        barTwoStyle.transition = `height ${animationSpeed}ms ease-in-out`;

        valueElement1.innerText = array[barOneIdx];
        valueElement2.innerText = array[barTwoIdx];

        barOneStyle.height = `${array[barOneIdx]}px`;
        barTwoStyle.height = `${array[barTwoIdx]}px`;
      }, i * animationSpeed * animationSpeedFactor);
    }
  }

  bubbleSort() {
    const { array } = this.state;
    const animations = getBubbleSortAnimations(array);
    const animationSpeed = this.state.animationSpeed;
    const bars = document.getElementsByClassName('array-bar');

    const animationSpeedFactor = 1;

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, newArray] = animations[i];
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;

      const isColorChange = i === null;
      const color = i % 4 === 0 || i % 4 === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;

      if (isColorChange) {
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed * animationSpeedFactor);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;

          const valueElement1 = bars[barOneIdx].querySelector('.value');
          const valueElement2 = bars[barTwoIdx].querySelector('.value');

          barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
          barTwoStyle.transition = `height ${animationSpeed}ms ease-in-out`;

          setTimeout(() => {
            if (newArray) {
              valueElement1.innerText = newArray[barOneIdx];
              valueElement2.innerText = newArray[barTwoIdx];

              barOneStyle.height = `${newArray[barOneIdx]}px`;
              barTwoStyle.height = `${newArray[barTwoIdx]}px`;
            }
          }, animationSpeed);
        }, i * animationSpeed * animationSpeedFactor);
      }

      setTimeout(() => {
        if (i === animations.length - 1) {
          setTimeout(() => {
            for (let j = 0; j < bars.length; j++) {
              const barStyle = bars[j].style;
              barStyle.backgroundColor = FINISHED_COLOR;
            }
          }, i * animationSpeed * animationSpeedFactor);
        }
      }, animationSpeed * animationSpeedFactor);
    }

  }

  selectionSort() {
    const { array } = this.state;
    const animations = getSelectionSortAnimations(array);
    const animationSpeed = this.state.animationSpeed;
    const bars = document.getElementsByClassName('array-bar');

    const animationSpeedFactor = 1;

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, value1, value2] = animations[i];
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;

      setTimeout(() => {
        if (value1 !== null && value2 !== null) {
          const valueElement1 = bars[barOneIdx].querySelector('.value');
          const valueElement2 = bars[barTwoIdx].querySelector('.value');

          barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
          barTwoStyle.transition = `height ${animationSpeed}ms ease-in-out`;

          valueElement1.innerText = value2;
          valueElement2.innerText = value1;

          barOneStyle.height = `${value2}px`;
          barTwoStyle.height = `${value1}px`;
        }
      }, i * animationSpeed * animationSpeedFactor);

      setTimeout(() => {
        if (i === animations.length - 1) {
          setTimeout(() => {
            for (let j = 0; j < bars.length; j++) {
              const barStyle = bars[j].style;
              barStyle.backgroundColor = FINISHED_COLOR;
            }
          }, i * animationSpeed * animationSpeedFactor);
        }
      }, animationSpeed * animationSpeedFactor);

    }
  }

  insertionSort() {
    const { array } = this.state;
    const animations = getInsertionSortAnimations(array);
    const animationSpeed = this.state.animationSpeed;
    const bars = document.getElementsByClassName('array-bar');

    const animationSpeedFactor = 1;

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, newHeight] = animations[i];
      const barOneStyle = bars[barOneIdx].style;
      // const barTwoStyle = bars[barTwoIdx].style

      setTimeout(() => {
        const valueElement1 = bars[barOneIdx].querySelector('.value');

        barOneStyle.transition = `height ${animationSpeed}ms ease-in-out`;
        barOneStyle.height = `${newHeight}px`;

        valueElement1.innerText = newHeight;
      }, i * animationSpeed * animationSpeedFactor);

      setTimeout(() => {
        if (i === animations.length - 1) {
          setTimeout(() => {
            for (let j = 0; j < bars.length; j++) {
              const barStyle = bars[j].style;
              barStyle.backgroundColor = FINISHED_COLOR;
            }
          }, i * animationSpeed * animationSpeedFactor);
        }
      }, animationSpeed * animationSpeedFactor);
    }
  }


  render() {
    const { array, userInput, animationSpeed, widthCalculate, } = this.state;

    return (
      <div className="array-container">
        <div className='controls-container'>
          <form onSubmit={(event) => this.handleInputSubmit(event)}>
            <input className='array-input' type="text" value={userInput} onChange={(event) => this.handleInputChange(event)} placeholder="Enter at least 5 numbers separated by commas" /><br />
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => this.resetArray()}>Randomize Array</button><br />
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <form>
            <label className='speed-change'>
              Animation Speed:
              <input type="radio" value="400" checked={animationSpeed === 400} onChange={this.handleSpeedChange} /> 1x
              <input type="radio" value="350" checked={animationSpeed === 350} onChange={this.handleSpeedChange} /> 2x
              <input type="radio" value="300" checked={animationSpeed === 300} onChange={this.handleSpeedChange} /> 3x
              <input type="radio" value="250" checked={animationSpeed === 250} onChange={this.handleSpeedChange} /> 4x
              <input type="radio" value="200" checked={animationSpeed === 200} onChange={this.handleSpeedChange} /> 5x
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
  return Math.floor(Math.random() * (max - min + 1) + min);
}
