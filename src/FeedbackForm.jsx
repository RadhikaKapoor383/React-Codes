import { useState } from 'react';
function FeedbackForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        rating: "5",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (form.name.trim() === "") {
            alert("Name required!");
            isValid = false;
        }
        if (form.message.trim() === "") {
            alert("Message required!");
            isValid = false;
        }
        if (form.email.trim() === "") {
            alert("Email required!");
            isValid = false;
        }
        if (isValid) {
            setSubmitted(true);
        }
    }

    const formStyle = {
        maxWidth: "450px", margin: "30px auto",
        padding: "25px", borderRadius: "15px",
        backgroundColor: "#f0f4ff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }
    const fieldStyle = {
        width: "100%", padding: "10px",
        borderRadius: "8px", fontSize: "15px",
        border: "2px solid #ccc",
        boxSizing: "border-box",
        marginBottom: "15px"
    }
    const buttonStyle = {
        width: "100%", padding: "12px",
        backgroundColor: "#4F46E5",
        color: "white", border: "none",
        borderRadius: "8px", fontSize: "16px",
        cursor: "pointer"
    }
    if (submitted) {
        return (
            <div style={formStyle}>
                <h2 style={{ textAlign: "center" }}>Thank you, {form.name}! 🎉</h2>
                <p>⭐ Rating: {form.rating}</p>
                <p>✉️ Email: {form.email}</p>
                <p>💬 Message: {form.message}</p>
                <button onClick={() => setSubmitted(false)} style={buttonStyle}>
                    Submit Another 📝
                </button>
            </div>
        );
    }
    return (
        <div>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' value={form.name} name='name' onChange={handleChange} style={fieldStyle} placeholder='Enter your name' />
                <label>Email:</label>
                <input type='email' value={form.email} name='email' onChange={handleChange} style={fieldStyle} placeholder='Enter your Email' />
                <label>Rating:</label>
                <select name="rating" value={form.rating} onChange={handleChange} style={fieldStyle}>
                    <option value="5">5 ⭐⭐⭐⭐⭐</option>
                    <option value="4">4 ⭐⭐⭐⭐</option>
                    <option value="3">3 ⭐⭐⭐</option>
                    <option value="2">2 ⭐⭐</option>
                    <option value="1">1 ⭐</option>
                </select>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    style={fieldStyle}
                    placeholder='Enter the message of feedback or any improvement'
                />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>

    );
}

export default FeedbackForm;