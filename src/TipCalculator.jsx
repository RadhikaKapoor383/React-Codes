import { useState } from "react";

function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTip] = useState(10);

    const tipAmount = bill * tipPercent / 100;
    const total = bill + tipAmount;

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
                <button onClick={() => setTip(10)}
                style={{
                    flex: 1, padding: "10px",
                    border: "none", borderRadius: "8px",
                    cursor: "pointer", fontWeight: "bold",
                    fontSize: "16px", backgroundColor: tipPercent === 10 ? "rgba(19, 134, 63, 0.84)" : "rgba(15, 80, 116, 0.84)"
                }}>10%</button>
                <button onClick={() => setTip(15)}
                style={{
                    flex: 1, padding: "10px",
                    border: "none", borderRadius: "8px",
                    cursor: "pointer", fontWeight: "bold",
                    fontSize: "16px", backgroundColor: tipPercent === 15 ? "rgba(19, 134, 63, 0.84)" : "rgba(15, 80, 116, 0.84)"
                }}>15%</button>
                <button onClick={() => setTip(20)}
                style={{
                    flex: 1, padding: "10px",
                    border: "none", borderRadius: "8px",
                    cursor: "pointer", fontWeight: "bold",
                    fontSize: "16px", backgroundColor: tipPercent === 20 ? "rgba(19, 134, 63, 0.84)" : "rgba(15, 80, 116, 0.84)"
                }}>20%</button>

            </div>
            <p>Tip Amount: Rs. {tipAmount}</p>
            <p>Total:      Rs. {total}</p>
            {bill === 0
                ? <p>Enter bill amount 👆</p>
                : <p>Total: Rs. {total}</p>
            }
        </div>
    )
}
export default TipCalculator;