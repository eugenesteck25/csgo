import React, { useState, useEffect } from 'react'
import './Visualizer.css';

const LinearSearchAlgo = () => {
    const [array, setArray] = useState([]);
    const [target, setTarget] = useState('');
    const [result, setResult] = useState(-1);
    const [selected, setSelected] = useState(-1);

    const generateArray = () => {
        const arr = [];
        for (let i = 1; i <= 10; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
        arr.sort((a, b) => a - b);
        setArray(arr);
        setTarget('');
        setResult(-1);
        setSelected(-1);
    };

    const linearSearch = () => {
        let i = 0;

        const searchInterval = setInterval(() => {
            if (i >= array.length) {
                clearInterval(searchInterval);
                setResult(-1);
                setSelected(-1);
                return;
            }

            setSelected(i);

            if (array[i] === parseInt(target)) {
                setResult(i);
                setSelected(-1);
                clearInterval(searchInterval);
                return;
            }

            i++;
        }, 1000);
    };

    // Add a useEffect hook to reset the selected index when the target input changes
    useEffect(() => {
        setSelected(-1);
    }, [target]);

    return (
        <div className='LSA-body'>
            <h1>Linear Search Visualizer</h1>
            <div style={{ marginTop: '10px' }}>
                <input
                    type='number'
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder='Search Target'
                />
                <button onClick={linearSearch}>Search</button>
            </div>

            <br />
            <div>
                <button onClick={generateArray}>Generate Array</button>
            </div>

            {result !== -1 ? (
                <div>
                    <p>Found target at index {result}.</p>
                </div>
            ) : (
                <div>
                    <p>Target not found.</p>
                </div>
            )}

            <div className='LSA-array-container'>
                {array.map((elem, index) => (
                    <div>
                        <div
                            className='LSA-array'
                            key={index}
                            style={{
                                display: 'inline-block',
                                backgroundColor:
                                    index === selected
                                        ? '#FFFF99' // yellow background for selected element
                                        : index === result
                                            ? '#32CD32' // green background for found element
                                            : '#FFFFFF', // white background for other elements
                                margin: '5px',
                                padding: '10px',
                            }}
                        >
                            {elem}
                        </div>
                        <div className='LSA-array-index' style={{ fontSize: '12px' }}>{index}</div> {/* add index below the element */}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default LinearSearchAlgo;