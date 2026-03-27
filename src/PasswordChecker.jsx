import { useState } from 'react';
function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);
    const isLong = password.length >= 8;

    const score = [hasUpper, hasLower, hasNumber, hasSymbol, isLong]
        .filter(Boolean).length;
    const strength = score <= 1 ? "Weak 🔴"
        : score <= 3 ? "Medium 🟡"
            : "Strong 🟢";

    function CheckItem({ label, passed }) {
        return (
            <p style={{
                color: passed ? "green" : "red",
                margin: "5px 0"
            }}>
                {passed ? "✅" : "❌"} {label}
            </p>
        );
    }
    return (
        <div style={{
            maxWidth: "400px", margin: "30px auto",
            padding: "25px", borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            fontFamily: "Arial", backgroundColor: "#fff"
        }}
        >
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>

                <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    style={{
                        flex: 1, padding: "10px",
                        borderRadius: "8px",
                        border: "2px solid #ccc",
                        outline: "none"
                    }}
                />

                <button
                    onClick={() => setShow(!show)}
                    style={{
                        padding: "10px 15px", cursor: "pointer",
                        backgroundColor: "#4F46E5",
                        color: "white", border: "none",
                        borderRadius: "8px", fontWeight: "bold"
                    }}
                >
                    {show ? "Hide 🙈" : "Show 👁️"}
                </button>
            </div>
            <div style={{
                backgroundColor: "#eee", borderRadius: "10px",
                height: "12px", marginBottom: "10px",
            }}>
                <div style={{
                    width: `${(score / 5) * 100} %`,
                    backgroundColor: strength === "weak" ? "red"
                        : strength === "Medium" ? "oraange"
                            : "green",
                    height: "12px", borderRadius: "10px",
                    transition: "width 0.3s ease"
                }}
                ></div>
            </div>
            <CheckItem label="Uppercase letter" passed={hasUpper} style={{
                backgroundColor: "#f9f9f9",
                padding: "15px", borderRadius: "10px",
                marginTop: "15px"
            }} />
            <CheckItem label="Lowercase letter" passed={hasLower} style={{
                backgroundColor: "#f9f9f9",
                padding: "15px", borderRadius: "10px",
                marginTop: "15px"
            }} />
            <CheckItem label="Number" passed={hasNumber} style={{
                backgroundColor: "#f9f9f9",
                padding: "15px", borderRadius: "10px",
                marginTop: "15px"
            }} />
            <CheckItem label="Symbol (!@#$)" passed={hasSymbol} style={{
                backgroundColor: "#f9f9f9",
                padding: "15px", borderRadius: "10px",
                marginTop: "15px"
            }} />
            <CheckItem label="8+ characters" passed={isLong} style={{
                backgroundColor: "#f9f9f9",
                padding: "15px", borderRadius: "10px",
                marginTop: "15px"
            }} />
            <p>{strength}</p>

        </div>
    )
}
export default PasswordChecker;