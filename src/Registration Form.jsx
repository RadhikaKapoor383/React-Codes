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

    return (
        <div style={formStyle}>
            <h2 style={titleStyle}>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Name:</label><br />
                    <input type="text" name="name" value={form.name} onChange={handleChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                    {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Roll Number:</label><br />
                    <input type="text" name="rollNumber" value={form.rollNumber} onChange={handleChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                    {errors.rollNumber && <span style={{ color: "red" }}>{errors.rollNumber}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Department:</label><br />
                    <select name="department" value={form.department} onChange={handleChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                    </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Year:</label><br />
                    <input type="text" name="year" value={form.year} onChange={handleChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                    {errors.year && <span style={{ color: "red" }}>{errors.year}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>CGPA:</label><br />
                    <input type="number" name="cgpa" value={form.cgpa} onChange={handleChange} step="0.01" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                    {errors.cgpa && <span style={{ color: "red" }}>{errors.cgpa}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>
                        <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} /> Active Student
                    </label>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Extracurricular:</label><br />
                    <input type="checkbox" name="extracurriculars" value="Sports" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Sports")} /> Sports{" "}
                    <input type="checkbox" name="extracurriculars" value="Music" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Music")} /> Music{" "}
                    <input type="checkbox" name="extracurriculars" value="Arts" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Arts")} /> Arts{" "}
                    <input type="checkbox" name="extracurriculars" value="Debate" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Debate")} /> Debate{" "}
                    <input type="checkbox" name="extracurriculars" value="Volunteering" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Volunteering")} /> Volunteering {" "}
                    <input type="checkbox" name="extracurriculars" value="Coding Club" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Coding Club")} /> Coding Club {" "}
                    <input type="checkbox" name="extracurriculars" value="Robotics" onChange={handleExtracurricularChange} checked={form.extracurriculars.includes("Robotics")} /> Robotics

                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Grade: {grade}</label>
                </div>

                <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
                    Submit
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#fcf8fc", borderRadius: "5px" }}>
                    <h3>Submitted Data</h3>
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Roll Number:</strong> {form.rollNumber}</p>
                    <p><strong>Department:</strong> {form.department}</p>
                    <p><strong>Year:</strong> {form.year}</p>
                    <p><strong>CGPA:</strong> {form.cgpa}</p>
                    <p><strong>Grade:</strong> {grade}</p>
                    <p><strong>Status:</strong> {form.isActive ? "Active" : "Inactive"}</p>
                    <p><strong>Extracurriculars:</strong> {form.extracurriculars.length > 0 ? form.extracurriculars.join(", ") : "None"}</p>
                    <button type="button" onClick={() => setSubmitted(false)} style={{ marginTop: "10px", padding: "10px 20px" }}>
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;
