import { useEffect, useState } from "react";
function WeatherCard() {
    const [city, setCity] = useState("Karachi");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [unit, setUnit] = useState("C");
    //C = Celsius, F = Fahrenheit

    useEffect(() => {
        setLoading(true);
        setError("");

        fetch(`https://wttr.in/${city}?format=j1`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setLoading(false);
            })
            .catch(() => {
                setError("City not found ❌");
                setLoading(false);
            });
    }, [city]);

    const [input, setInput] = useState("Karachi");
    function handleSubmit(e) {
        e.preventDefault();
        setCity(input);
    }
    function handleSearch() {
        setCity(input);
    }
    const tempC = Number(weather?.current_condition[0].temp_C);
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
            <h2>Weather in {city}</h2>
            <input
                style={{
                    display: "flex", gap: "10px",
                    marginBottom: "20px"
                }}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter city name"
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                }}
            />
            <button onClick={handleSubmit}>Get Weather</button>
            <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
                Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
            </button>
            {weather && (
                <div>
                    <p style={{
                        fontSize: "24px", fontWeight: "bold",
                        textAlign: "center", margin: "20px 0"
                    }}
                    >Temperature: {displayTemp}</p>
                    <p>Description: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}
export default WeatherCard;