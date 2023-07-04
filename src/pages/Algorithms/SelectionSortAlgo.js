import React from 'react';
import {
    getSelectionSortAnimations,
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

export default class SelectionSortAlgo extends React.Component {
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
    selectionSort() {
        const { array } = this.state;
        const animations = getSelectionSortAnimations(array);
        const animationSpeed = this.state.animationSpeed;
        const bars = document.getElementsByClassName('array-bar');

        const animationSpeedFactor = 1;

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            console.log(i % 3)
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = bars[barOneIdx].style;
                const barTwoStyle = bars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed * animationSpeedFactor);


            }
            setTimeout(() => {
                const [barOneIdx, barTwoIdx, value1, value2] = animations[i];
                const barOneStyle = bars[barOneIdx].style;
                const barTwoStyle = bars[barTwoIdx].style;
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
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
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
