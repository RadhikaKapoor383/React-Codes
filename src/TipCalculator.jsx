import { useState } from "react";

function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTip] = useState(10);

    const tipAmount = bill * tipPercent / 100;
    const total = bill + tipAmount;

    const btnStyle = (value) => ({
        flex: 1,
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        color: "white",
        backgroundColor: tipPercent === value
            ? "rgba(19, 134, 63, 0.84)"   // green = selected
            : "rgba(15, 80, 116, 0.84)"   // blue  = not selected
    });

    return (
        <div style={{
            maxWidth: "350px", margin: "30px auto",
            padding: "25px", borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(222, 240, 250, 0.84)",
            fontFamily: "Arial", backgroundColor: "rgb(230, 240, 245)"
        }}>
            <label>Bill Amount: </label>
            <input type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                style={{
                    width: "100%", padding: "10px",
                    fontSize: "18px", borderRadius: "8px",
                    border: "2px solid #ccc",
                    boxSizing: "border-box"
                }} />
            <div style={{
                display: "flex", gap: "10px",
                margin: "15px 0"
            }}>
                <button onClick={() => setTip(10)} style={btnStyle(10)}>10%</button>
                <button onClick={() => setTip(15)} style={btnStyle(15)}>15%</button>
                <button onClick={() => setTip(20)} style={btnStyle(20)}>20%</button>

            </div>
            <p>Tip Amount: Rs. {tipAmount}</p>
            {bill === 0
                ? <p style={{ color: "gray" }}>Enter bill amount 👆</p>
                : <p>Total: Rs. {total}</p>
            }
        </div>
    )
}
export default TipCalculator;