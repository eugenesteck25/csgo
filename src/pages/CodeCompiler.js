import React, { useState } from 'react';
import './PagesCSS.css';
import SideBar from '../components/SideBar';

const CodeCompiler = () => {
    const [code, setCode] = useState('');
    const [consoleOutput, setConsoleOutput] = useState('');
    const [error, setError] = useState('');
    const [timeComplexity, setTimeComplexity] = useState('');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const captureConsoleOutput = (log) => {
        setConsoleOutput((prevOutput) => prevOutput + log + '\n');
    };

    const runCode = () => {
        try {
            const startTime = performance.now();

            // Replace the global console.log with our custom function
            const originalConsoleLog = console.log;
            console.log = captureConsoleOutput;

            // eslint-disable-next-line no-eval
            eval(code);

            const endTime = performance.now();
            const executionTime = endTime - startTime;

            // Restore the original console.log
            console.log = originalConsoleLog;

            setTimeComplexity(`Execution time: ${executionTime.toFixed(2)} milliseconds`);
            setError('');
        } catch (err) {
            // Handle any errors that occur during execution
            setError(err.message);
            setConsoleOutput('');
            setTimeComplexity('');
        }
    };

    const clearOutput = () => {
        setConsoleOutput('');
        setError('');
        setTimeComplexity('');
    };

    const clearInput = () => {
        setCode('');
    };

    return (
        <div>
            <SideBar />
            <div className="Codecompiler">
                <div>
                    <div className="compiler-input">
                        <textarea
                            value={code}
                            onChange={handleCodeChange}
                            className="compiler-textarea"
                        />
                    </div>

                    <div className="compiler-button">
                        <button onClick={runCode}>Run</button>
                        <button onClick={clearInput}>Clear Input</button>
                    </div>
                </div>
                <div>

                    <div className="compiler-output">
                        <pre>{consoleOutput}</pre> {/* Display console output in a <pre> element */}
                        <pre>{error}</pre>
                        <pre>{timeComplexity}</pre>
                    </div>

                    <div className="compiler-button-output">
                        <button onClick={clearOutput}>Clear Output</button>
                    </div>
                    <div className="compiler-visualization">
                        <pre>{code}</pre> {/* Display code visualization */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CodeCompiler;