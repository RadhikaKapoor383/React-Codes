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
        <div style={{
            textAlign: "center", padding: "30px",
            maxWidth: "500px", margin: "20px auto",
            backgroundColor: "#272753",
            borderRadius: "20px",
            border: "4px solid #333"
        }}>
            <div className="circle" style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",    // ← circle!
                backgroundColor: light, // ← state hi color hai
                margin: "20px auto",
                border: "3px solid black"
            }}>

            </div>
            <button onClick={handleLight} style={{
                padding: "10px 20px", fontSize: "16px",
                cursor: "pointer", borderRadius: "8px",
                backgroundColor: "#080538", color: "white",
                border: "none", marginTop: "15px",

            }}>Next Light</button>
            {<p style={{
                textAlign: "center", color: light, fontSize: "20px",
                textTransform: "uppercase",
                fontWeight: "bold"
            }}>{message}</p>}
            <p style={{
                color: light, fontSize: "20px",
                textTransform: "uppercase",
                fontWeight: "bold"
            }}>
                {light}
            </p>
        </div>
    )
}
export default TrafficLight;