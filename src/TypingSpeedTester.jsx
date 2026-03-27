import { useState, useEffect } from "react";
function TypingTest() {
    const targetText = "The quick brown fox.";
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

        if (value.length === 0) {
            setIsRunning(false);  
            setTimer(0);          
            return;
        }
        if (!isRunning && value.length > 0) {
            setIsRunning(true);
        }

        if (value === targetText) {
            setIsRunning(false);
            setFinish(true);
        } else {
            setFinish(false);
        }
    }

    const accuracyMatch = typed.split("").filter(
        (char, i) => char === targetText[i]
    ).length;
    const accuracyPercent = typed.length > 0
        ? Math.round((accuracyMatch / targetText.length) * 100)
        : 0;

    function handleReset() {
        setTyped("");
        setFinish(false);
        setIsRunning(false);
        setTimer(0);
    }
    return (
        <div style={{
            maxWidth: "600px", margin: "30px auto",
            padding: "25px", borderRadius: "15px",
            backgroundColor: "#fafafa",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            fontFamily: "Arial"
        }}>
            <p style={{
                backgroundColor: "#f5f5f5",
                padding: "15px", borderRadius: "8px",
                fontSize: "18px", letterSpacing: "1px",
                marginBottom: "15px", color: "#666"
            }}>{targetText}</p>
            <textarea placeholder="Enter your text here..." onChange={handleTyping}
                name="message" rows={5} value={typed}
                style={{
                    width: "100%", padding: "12px",
                    fontSize: "18px", borderRadius: "8px",
                    border: "2px solid #4F46E5",
                    boxSizing: "border-box", resize: "none"
                }} />
            <p style={{
                display: "inline-block",
                backgroundColor: "#4F46E5", color: "white",
                padding: "5px 15px", borderRadius: "20px",
                fontSize: "18px", marginBottom: "15px"
            }}>{timer}s</p>
            {finished && <p style={{
                padding: "15px", borderRadius: "8px",
                fontSize: "18px", letterSpacing: "1px",
                marginBottom: "15px", color: "#666"
            }}>Done! ⏱️ {timer} seconds <br /> Accuracy % {accuracyPercent}</p>}
            <button style={{
                display: "inline-block",
                backgroundColor: "#4F46E5", color: "white",
                padding: "5px 15px", borderRadius: "20px",
                fontSize: "18px", marginBottom: "15px", cursor: "pointer"
            }} onClick={handleReset}>Reset Button</button>
        </div>
    )
}
export default TypingTest;