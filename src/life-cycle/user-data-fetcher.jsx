import React, { useState, useEffect } from 'react';

function UserCard() {

  // ---- STATE ----
  const [user, setUser]       = useState(null);   // stores user data
  const [loading, setLoading] = useState(true);   // loading indicator
  const [count, setCount]     = useState(0);      // click counter

  // ---- 1. componentDidMount → runs ONCE on first render ----
  useEffect(() => {
    console.log("✅ Component Mounted!");

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });

  }, []); // 👈 empty [] = run once only


  // ---- 2. componentDidUpdate → runs when 'count' changes ----
  useEffect(() => {
    console.log("🔄 Count updated to:", count);

  }, [count]); // 👈 [count] = run when count changes


  // ---- 3. componentWillUnmount → cleanup on remove ----
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏱️ Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);              // 👈 cleanup!
      console.log("❌ Component Unmounted! Timer cleared.");
    };

  }, []); // 👈 empty [] = setup once, cleanup on unmount


  // ---- RENDER ----
  if (loading) return <p>Loading user...</p>;

  return (
    <div>
      <h1>👤 {user.name}</h1>
      <p>📧 {user.email}</p>
      <p>🌐 {user.website}</p>
      <hr />
      <p>Button clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default UserCard;