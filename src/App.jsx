import React from 'react';
import { useState } from 'react';
function BookTracker({ bookTitle = "", totalPages = 200 }) {
    const [pagesRead, setPagesRead] = useState(0);

    const handlePagesReadChange = () => {
        setPagesRead(prev => Math.min(totalPages, prev + 10));
    }
    const handlePageReadChangeMore = () => {
        setPagesRead(prev => Math.min(totalPages, prev + 25));
    }
    const handleReset = () => {
        setPagesRead(0);
    }
    const pagesLeft = totalPages - pagesRead;
    const percentage = (pagesRead / totalPages) * 100;
    const percentageRounded = Math.round(percentage).toFixed(2);

    let status;
    if (percentage === 100) {
        status = "Finished";
    }
    else if (percentage >= 50) {
        status = "Halfway there!";
    }
    else if (percentage > 0) {
        status = "Just started!";
    }
    else {
        status = "Not started yet!";
    }
    return (
        <div style={{
            border: "1px solid purple",
            borderRadius: "9px",
            padding: "15px",
            maxWidth: "400px",
            margin: "10px",
        }}>
            <h1>Book Title: {bookTitle}</h1>
            <p>Total Pages: {totalPages}</p>
            <p>Pages Read: {pagesRead}</p>
            <p>Pages Left: {pagesLeft}</p>
            <div style={{
                backgroundColor: "#e5e7eb", borderRadius: "10px",
                overflow: "hidden", marginBottom: "10px"
            }}>
                <div style={{
                    width: `${percentageRounded}%`,
                    backgroundColor: percentage === 100 ? "green" : "red",
                    height: "20px",
                    transition: "width 0.3s ease",
                }} />
            </div>
            <p>Percentage Read: {percentageRounded}%</p>
            <p>Status: {status}</p>
            <button onClick={handlePagesReadChange} style={{ margin: "2px", padding: "2px" }}>Read 10 Pages</button>
            <button onClick={handlePageReadChangeMore} style={{ margin: "2px", padding: "2px" }}>Read 25 Pages</button>
            <button onClick={handleReset} style={{ margin: "2px", padding: "2px" }}>Reset Progress</button>
        </div>
    )
}
export default function App() {
    return (
        <div>
            <BookTracker bookTitle="The Great Gatsby" totalPages={180} />
            <BookTracker bookTitle="To Kill a Mockingbird" totalPages={281} />
            <BookTracker bookTitle="1984" totalPages={328} />
            <BookTracker bookTitle="The Catcher in the Rye" totalPages={214} />
        </div>
    );
}
