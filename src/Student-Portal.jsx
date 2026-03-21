import { useState, useEffect } from 'react';

function StudentPortal({ portalName }) {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({
        name: "",
        cgpa: "",
        department: "CS"
    });
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        document.title = `Students: ${students.length}`;
    }, [students]);

    const calculateGrade = (cgpa) => {
        if (cgpa >= 3.5) return "A";
        if (cgpa >= 3.0) return "B";
        if (cgpa >= 2.0) return "C";
        return "F";
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (form.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (form.cgpa.trim() === "") {
            newErrors.cgpa = "CGPA is required";
        }
        if (form.department.trim() === "") {
            newErrors.department = "Department is required";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        if (form.cgpa < 0 || form.cgpa > 4) {
            setErrors({ cgpa: "CGPA must be between 0 and 4" });
            return;
        }
        setErrors({});
        const newStudent = {
            ...form,
            id: Date.now() // Simple ID generation
        };
        setStudents([...students, newStudent]);
        setForm({
            name: "",
            cgpa: "",
            department: "CS"
        });
        setMessage(`${form.name} added! ✅`);
    }

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>{portalName}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <input
                    type="number"
                    name="cgpa"
                    placeholder="CGPA"
                    value={form.cgpa}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    max="4"
                />
                {errors.cgpa && <p style={{ color: "red" }}>{errors.cgpa}</p>}
                <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                >
                    <option value="CS">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="SE">Software Engineering</option>
                    <option value="DS">Data Science</option>
                    <option value="AI">Artificial Intelligence</option>
                </select>
                {errors.department && <p style={{ color: "red" }}>{errors.department}</p>}
                <button type="submit">Add Student</button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
            <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredStudents.map((student) => (
                    <li key={student.id}>
                        {student.name} - CGPA: {student.cgpa} - Department: {student.department} - Grade: {calculateGrade(student.cgpa)}
                    </li>
                ))}
            </ul>
            {students.length === 0 && <p>No students added yet.</p>}
        </div>
    );
}

export default StudentPortal;