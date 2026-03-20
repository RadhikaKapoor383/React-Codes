import { useState, useEffect } from 'react';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                setError("Failed to fetch user data");
                setLoading(false);
            });
    }, []);
    if (loading) {
        return(
            <p>Loading... ⏳</p>
        );
    }
    if (error !== "") {
        return (
            <>
                <p style={{ color: "red" }}>{error}</p>
                <button onClick={() => window.location.reload()}>Reload 🔄</button>
            </>
            );
    }
    if (user) {
        return (
            <div style={{ border: "1px solid black", padding: "10px", maxWidth: "400px" }}>
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
                <button onClick={() => window.location.reload()}>Reload 🔄</button>
            </div>
        );
    }
    return null;
}
export default UserProfile;