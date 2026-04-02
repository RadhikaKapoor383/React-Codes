import { useEffect, useState } from "react";
function WeatherCard() {
    const [city, setCity] = useState("Karachi");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [input, setInput] = useState("Karachi");
    const [unit, setUnit] = useState("C");
    //C = Celsius, F = Fahrenheit

    useEffect(() => {
        if (!city.trim()) return;  // ← khaali city skip karo

        setLoading(true);
        setError("");
        setWeather(null);

        fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`)
            .then(res => res.json())
            .then(locationData => {
                if (locationData.length === 0) {
                    throw new Error("City not found");
                }             
                return fetch(`https://wttr.in/${city}?format=j1`);
            })
            .then(res => res.json())
            .then(data => {
                if (!data.current_condition) throw new Error("No data");
                setWeather(data);
                setLoading(false);
            })
            .catch(() => {
                setError("City not found ❌ Please try another city");
                setLoading(false);
            });

    }, [city]);

    function handleSearch() {
        if (input.trim() === "") {
            setError("Please enter a city name ❌");
            return;
        }
        // Numbers only nahi hona chahiye
        if (/^\d+$/.test(input)) {
            setError("Please enter a valid city name ❌");
            return;
        }
        setCity(input);
    }
    const current = weather?.current_condition?.[0];
    const tempC = Number(current?.temp_C ?? 0);
    const desc = current?.weatherDesc[0].value ?? "";
    const humidity = current?.humidity ?? "";
    const wind = current?.windspeedKmph ?? "";
    const displayTemp = unit === "C"
        ? `${tempC} °C`
        : `${(tempC * 9 / 5 + 32).toFixed(1)} °F`;

    return (
        <div style={{
            maxWidth: "380px", margin: "30px auto",
            padding: "25px", borderRadius: "20px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white", fontFamily: "Arial",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
        }}>
            <h2 style={{ textAlign: "center" }}>🌤️ Weather in {city}</h2>
            <div style={{
                display: "flex", gap: "10px",
                marginBottom: "20px"
            }}>
                <input
                    style={{
                        flex: 1, padding: "10px",
                        borderRadius: "8px", border: "none",
                        fontSize: "16px", outline: "none"
                    }}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Enter city name"
                    onKeyDown={e => e.key === "Enter" && handleSearch()}
                />
                <button style={{
                    padding: "18px 16px", borderRadius: "20px",
                    border: "2px solid white", background: "transparent",
                    color: "white", cursor: "pointer",
                    fontWeight: "bold"
                }} onClick={handleSearch}>Search 🔍</button>
            </div>
            <button style={{
                padding: "18px 16px", borderRadius: "20px",
                border: "2px solid white", background: "transparent",
                color: "white", cursor: "pointer",
                fontWeight: "bold"
            }} onClick={() => setUnit(unit === "C" ? "F" : "C")}>
                Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
            </button>
            {loading ? (
                <p style={{ fontSize: "18px", textAlign: "center" }}>
                    Fetching weather... ⏳
                </p>
            ) : error ? (
                <p style={{
                    fontSize: "18px", color: "#FFB3B3",
                    textAlign: "center"
                }}>
                    {error}
                </p>
            ) : weather ? (
                <div>
                    <p style={{
                        fontSize: "46px", fontWeight: "bold",
                        textAlign: "center", margin: "10px 0"
                    }}>
                        {displayTemp}
                    </p>
                    <p style={{ fontSize: "22px", textAlign: "center" }}>
                        {desc}
                    </p>
                    <p style={{
                        fontSize: "16.75px", textAlign: "center",
                        opacity: 0.85, marginTop: "10px"
                    }}>
                        💧 Humidity: {humidity}% &nbsp;|&nbsp; 💨 Wind: {wind} km/h
                    </p>
                </div>
            ) : null}
        </div>
    );
}
export default WeatherCard;