import { useState, useEffect } from 'react';
function LiveDashboard({ stdname = "Student" }) {
    const [time, setTime] = useState("");
    const [studyCount, setStudyCount] = useState(0);
    const [isStudying, setIsStudying] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        document.title = `Study Count: ${studyCount}`;
    }, [studyCount]);
    useEffect(() => {
        if (studyCount > 0) {
            if (isStudying === true) {
                console.log("Study started!");
            }
            else {
                console.log("Study stopped!");
            }
        }
    }, [isStudying, studyCount]);
    function handleStartStudy() {
        setIsStudying(true);
        setStudyCount(prev => prev + 1);
    }
    function handleStopStudy() {
        setIsStudying(false);
    }
    function handleResetStudy() {
        setIsStudying(false);
        setStudyCount(0);
    }
    return (
        <div>
            <h1>Live Dashboard for {stdname}</h1>
            <p>Current Time: {time}</p>
            <p>Study Count: {studyCount}</p>
            <p style={{ backgroundColor: isStudying ? "lightgreen" : "lightgray", height: "30px", borderRadius: "5px", alignContent: "center" }}>{isStudying ? "📖 Currently Studying" : "😴 Not Studying"}</p>
            <button onClick={handleStartStudy} style={{ margin: "5px", padding: "5px" }}>Start Studying</button>
            <button onClick={handleStopStudy} style={{ margin: "5px", padding: "5px" }}>Stop Studying</button>
            <button onClick={handleResetStudy} style={{ margin: "5px", padding: "5px" }}>Reset Study Count</button>
        </div>
    );
}
export default LiveDashboard;