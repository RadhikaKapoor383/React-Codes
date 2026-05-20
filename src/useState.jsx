import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Toggle: {isOpen ? "Open" : "Closed"}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count</button>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            <div onMouseEnter={() => alert('Mouse entered!')}>Hover me</div>
            <div onMouseLeave={() => alert('Mouse left!')}>Hover me</div>
        </div>
    );
}
