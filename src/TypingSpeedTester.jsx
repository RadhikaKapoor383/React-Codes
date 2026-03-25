import { useState, useEffect } from "react";
function TypingTest() {
    const [targetText] = "The quick brown fox.";
    const [typed, setTyped] = useState("");
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);
    function handleTyping (e) {
        const value = e.target.value;
        setTyped(value);

        if(value.length === 1) {
            setIsRunning(true);
        }
        if(typed === targetText) {
            setIsRunning(false);
            setFinished(true);
        }
    }
    
}