import React, { useState } from 'react';

const Stopwatch = () => { const [time, setTime] = useState(0); const [isActive, setIsActive] = useState(false); const [history, setHistory] = useState([]);

const handleStart = () => { setIsActive(true); setTime(0); setHistory([]); setInterval(() => { if (isActive) { setTime(prevTime => prevTime + 1); } }, 1000); };

const handleStop = () => { setIsActive(false); setHistory(prevHistory => prevHistory.concat(time)); };

const handleReset = () => { setTime(0); setIsActive(false); setHistory([]); };

return ( <div> <h1>{time}</h1> <button onClick={handleStart}>Start</button> <button onClick={handleStop}>Stop</button> <button onClick={handleReset}>Reset</button> <ul> {history.map((item, index) => ( <li key={index}>Time {index + 1}: {item}</li> ))} </ul> </div> ); }

export default Stopwatch;