import { useState } from 'react';
function TrafficLight() {
    const [light, setLight] = useState("red");

    function handleLight() {
        if (light === "red") {
            setLight("yellow");
           
        } else if (light === "yellow") {
            setLight("green");
           
        } else {
            setLight("red");
            
        }
    }
    const message = light === "red" ? "Stop! 🛑"
        : light === "yellow" ? "Ready... ⚠️"
            : "Go! ✅"

    return (
        <div>
            <div className="circle" style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",    // ← circle!
                backgroundColor: { light }, // ← state hi color hai
                margin: "20px auto",
                border: "3px solid black"
            }}>
                <button style={{
                    padding: "10px 25px", fontSize: "16px",
                    cursor: "pointer", borderRadius: "8px",
                    backgroundColor: "#444", color: "white",
                    border: "none", marginTop: "15px"
                }}>Next Light</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}
export default TrafficLight;