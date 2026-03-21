import { useState } from 'react';

function RegistrationForm() {
    const [form, setForm] = useState({
        name: "",
        rollNumber: "",
        department: "Computer Science",
        year: "",
        cgpa: "",
        isActive: false,
        extracurriculars: []
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleExtracurricularChange = (e) => {
        const { value, checked } = e.target;

        setForm((prevForm) => ({
            ...prevForm,
            extracurriculars: checked
                ? [...prevForm.extracurriculars, value]
                : prevForm.extracurriculars.filter((activity) => activity !== value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (form.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (form.rollNumber.trim() === "") {
            newErrors.rollNumber = "Roll Number is required";
        }
        if (form.year.trim() === "") {
            newErrors.year = "Year is required";
        }
        if (form.cgpa === "") {
            newErrors.cgpa = "CGPA is required";
        } else if (Number(form.cgpa) < 0 || Number(form.cgpa) > 4) {
            newErrors.cgpa = "CGPA must be between 0 and 4";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setSubmitted(false);
            return;
        }

        setSubmitted(true);
    };

    const cgpa = form.cgpa === "" ? 0 : parseFloat(form.cgpa);
    let grade = "-";

    if (form.cgpa !== "") {
        if (cgpa >= 3.5) {
            grade = "A";
        } else if (cgpa >= 3.0) {
            grade = "B";
        } else if (cgpa >= 2.0) {
            grade = "C";
        } else {
            grade = "F";
        }
    }

    const formStyle = {
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #131212",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9"
    };
    const titleStyle = {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333"
    };
    const labelStyle = {
        display: "inline-block",
        marginBottom: "5px",
        fontWeight: "bold",
        color: "#555"
    }
    const checkboxLabelStyle = {
        marginLeft: "1px",
        marginRight: "2px",
        fontWeight: "bold",
        color: "#555",
        marginBottom: "10px",
        gap: "15px",
        display: "inline-flex",
        alignItems: "center",
        wrap: "wrap"
    }
    const inputStyle = {
        width: "100%",
        padding: "8px",
        boxSizing: "border-box",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px"
    };
    const checkboxStyle = {
        marginRight: "10px",
        marginLeft: "1px",
        transform: "scale(1.2)",
        marginBottom: "10px",
        gap: "15px",
        display: "inline-flex",
        alignItems: "center",
        wrap: "wrap"
    };
    const errorStyle = {
        color: "red",
        fontSize: "0.9em",
        marginTop: "-8px",
        marginBottom: "10px"
    };
    const radioLabelStyle = {
        marginRight: "15px",
        fontWeight: "bold",
        color: "#555",
        width: "100%",
        padding: "8px"
    };
    return (
        <div style={formStyle}>
            <h2 style={titleStyle}>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label style={labelStyle}>Name:</label><br />
                    <input type="text" name="name" value={form.name} onChange={handleChange} style={inputStyle} />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={labelStyle}>Roll Number:</label><br />
                    <input type="text" name="rollNumber" value={form.rollNumber} onChange={handleChange} style={inputStyle} />
                    {errors.rollNumber && <span style={errorStyle}>{errors.rollNumber}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={labelStyle}>Department:</label><br />
                    <select name="department" value={form.department} onChange={handleChange} style={radioLabelStyle}>
                        <option value="Computer Science" style={radioLabelStyle}>Computer Science</option>
                        <option value="Software Engineering" style={radioLabelStyle}>Software Engineering</option>
                        <option value="Information Technology" style={radioLabelStyle}>Information Technology</option>
                        <option value="Artificial Intelligence" style={radioLabelStyle}>Artificial Intelligence</option>
                        <option value="Cybersecurity" style={radioLabelStyle}>Cybersecurity</option>
                        <option value="Data Science" style={radioLabelStyle}>Data Science</option>
                        <option value="Electrical Engineering" style={radioLabelStyle}>Electrical Engineering</option>
                        <option value="Mechanical Engineering" style={radioLabelStyle}>Mechanical Engineering</option>
                        <option value="Civil Engineering" style={radioLabelStyle}>Civil Engineering</option>
                    </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={labelStyle}>Year:</label><br />
                    <input type="text" name="year" value={form.year} onChange={handleChange} style={inputStyle} />
                    {errors.year && <span style={errorStyle}>{errors.year}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={labelStyle}>CGPA:</label><br />
                    <input type="number" name="cgpa" value={form.cgpa} onChange={handleChange} step="0.01" style={inputStyle} />
                    {errors.cgpa && <span style={errorStyle}>{errors.cgpa}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={checkboxLabelStyle}>
                        <span style={checkboxLabelStyle}>Active Student:</span> <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} style={checkboxStyle} />
                    </label>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={checkboxLabelStyle}>Extracurricular:</label><br />
                    <span style={checkboxLabelStyle}>Sports{" "}</span><input type="checkbox" name="extracurriculars" value="Sports" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Sports")} style={checkboxStyle} />
                    <span style={checkboxLabelStyle}>Music{" "}</span><input type="checkbox" name="extracurriculars" value="Music" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Music")} style={checkboxStyle} />
                    <span style={checkboxLabelStyle}>Arts{" "}</span><input type="checkbox" name="extracurriculars" value="Arts" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Arts")} style={checkboxStyle} />
                    <span style={checkboxLabelStyle}>Debate{" "}</span><input type="checkbox" name="extracurriculars" value="Debate" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Debate")} style={checkboxStyle} />
                    <br /><span style={checkboxLabelStyle}>Volunteering{" "}</span><input type="checkbox" name="extracurriculars" value="Volunteering" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Volunteering")} style={checkboxStyle} />
                    <span style={checkboxLabelStyle}>Coding Club{" "}</span><input type="checkbox" name="extracurriculars" value="Coding Club" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Coding Club")} style={checkboxStyle} />
                    <span style={checkboxLabelStyle}>Robotics</span><input type="checkbox" name="extracurriculars" value="Robotics" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Robotics")} style={checkboxStyle} />

                </div>

                <button type="submit" style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#5051a5", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "whitesmoke", borderRadius: "5px", border: "1px solid #ccc" }}>
                    <h3 style={titleStyle}>Submitted Data</h3>
                    <p style={labelStyle}><strong>Name:</strong> {form.name}</p>
                    <br /><p style={labelStyle}><strong>Roll Number:</strong> {form.rollNumber}</p>
                    <br /><p style={labelStyle}><strong>Department:</strong> {form.department}</p>
                    <br /><p style={labelStyle}><strong>Year:</strong> {form.year}</p>
                    <br /><p style={labelStyle}><strong>CGPA:</strong> {form.cgpa}</p>
                    <br /><p style={labelStyle}><strong>Grade:</strong> {grade}</p>
                    <br /><p style={labelStyle}><strong>Status:</strong> {form.isActive ? "Active" : "Inactive"}</p>
                    <br /><p style={labelStyle}><strong>Extracurriculars:</strong> {form.extracurriculars.length > 0 ? form.extracurriculars.join(", ") : "None"}</p>
                    <br /><button type="button" onClick={() => setSubmitted(false)} style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#5051a5", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;
