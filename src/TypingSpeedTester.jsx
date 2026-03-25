import { useState, useEffect } from "react";
function TypingTest() {
    const [targetText] = "The quick brown fox.";
    const [typed, setTyped] = useState("");
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [finished, setFinish] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);
    function handleTyping(e) {
        const value = e.target.value;
        setTyped(value);

        if (value.length === 1) {
            setIsRunning(true);
        }
        if (typed === targetText) {
            setIsRunning(false);
            setFinish(true);
        }
    }
    const accuracy = typed.split("").filter(
        (char, i) => char === targetText[i]
    ).length;
    const accuracyParcent = typed.length > 0
        ? Math.rount((accuracy / target.length) * 100)
        : 0;

    function handleReset() {
        setTyped("");
        setFinish(false);
        setIsRunning(false);
        setTimer(0);
    }
    return (
        <div>
            <p style={{
                backgroundColor: "#f5f5f5",
                padding: "15px", borderRadius: "8px",
                fontSize: "18px", letterSpacing: "1px",
                marginBottom: "15px", color: "#666"
            }}>{targetText}</p>
            <textarea></textarea>
        </div>
    )
}