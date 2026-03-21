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
        if (cgpa >= 3.5){ 
            return "A 🌟";
        }
        else if (cgpa >= 3.0){ 
            return "B ✅";
        }
        else if (cgpa >= 2.0){
            return "C ⚠️";
        }
        else {
            return "F 💀";
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    function removeStudent(student) {
        setStudents(prev => prev.filter(item => item.id !== student.id));
        setMessage(`${student.name} removed 🗑️`);
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
        if (form.cgpa < 0 || form.cgpa > 4) {
            setErrors({ cgpa: "CGPA must be between 0 and 4" });
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setErrors({});
        setStudents([...students, {
            id: Date.now(),
            name: form.name,
            cgpa: parseFloat(form.cgpa),
            department: form.department
        }]);
        setMessage(`${form.name} added! ✅`);
        setForm({ name: "", cgpa: "", department: "CS" });
    }

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <style>{`
                .student-portal {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #d5f1ee 0%, #e2cdf8 100%);
                    min-height: 100vh;
                    color: white;
                }

                .portal-header {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .portal-header h1 {
                   
                    font-size: 2.5rem;
                    margin: 0;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .student-form {
                    background: rgba(231, 248, 240, 0.95);
                    padding: 25px;
                    border-radius: 15px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                    margin-bottom: 30px;
                    backdrop-filter: blur(10px);
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 600;
                    color: #0f0f0f;
                }

                .form-input {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #e9f5f3;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #162981;
                    box-shadow: 0 0 0 3px rgba(222, 228, 253, 0.94);
                }

                .form-select {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #edf5fd;
                    border-radius: 8px;
                    font-size: 16px;
                    background: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .form-select:focus {
                    outline: none;
                    border-color: #5161a7;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .error-message {
                    color: #97190b;
                    font-size: 14px;
                    margin-top: 5px;
                    font-weight: 500;
                }

                .submit-btn {
                    background: linear-gradient(135deg, #528797 0%, #847197 100%);
                    color: white;
                    padding: 12px 30px;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                }

                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(207, 240, 248, 0.89);
                }
                .remove-btn {
                    background: linear-gradient(135deg, #528797 0%, #847197 100%);
                    color: white;
                    padding: 12px 30px;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                }

                .remove-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(208, 239, 252, 0.93);
                }

                .success-message {
                    background: #d4edda;
                    color: #155724;
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    border: 1px solid #c3e6cb;
                    text-align: center;
                    font-weight: 500;
                }

                .search-section {
                    margin-bottom: 30px;
                }

                .search-input {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 8px;
                    font-size: 16px;
                    background: rgba(255, 255, 255, 0.9);
                    color: #333;
                    transition: all 0.3s ease;
                }

                .search-input:focus {
                    outline: none;
                    border-color: rgba(255, 255, 255, 0.8);
                    background: white;
                }

                .students-list {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 15px;
                    padding: 25px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                    backdrop-filter: blur(10px);
                }

                .student-item {
                    background: white;
                    padding: 15px;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    border-left: 4px solid #667eea;
                    transition: all 0.3s ease;
                }

                .student-item:hover {
                    transform: translateX(5px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                }

                .student-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .student-name {
                    font-weight: 600;
                    color: #333;
                    font-size: 1.1rem;
                }

                .student-details {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .detail-item {
                    background: #f8f9fa;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.9rem;
                    color: #666;
                }

                .grade-badge {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .remove-btn {
                    background: linear-gradient(135deg, #bb5a7a 0%, #9c2d52 100%);
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-left: 10px;
                }

                .remove-btn:hover {
                    transform: scale(1.05);
                }

                .no-students {
                    text-align: center;
                    color: rgba(136, 20, 20, 0.8);
                    font-style: italic;
                    padding: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    margin-top: 20px;
                }

                @media (max-width: 768px) {
                    .student-portal {
                        padding: 10px;
                    }

                    .portal-header h1 {
                        font-size: 2rem;
                    }

                    .student-info {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .student-details {
                        width: 100%;
                        justify-content: space-between;
                    }
                }
            `}
            </style>
            <div className="student-portal">
                <div className="portal-header">
                    <h1>{portalName}</h1>
                </div>

                <form className="student-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Student Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter student name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-input"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label>CGPA</label>
                        <input
                            type="number"
                            name="cgpa"
                            placeholder="Enter CGPA (0-4)"
                            value={form.cgpa}
                            onChange={handleChange}
                            step="0.01"
                            className="form-input"
                        />
                        {errors.cgpa && <p className="error-message">{errors.cgpa}</p>}
                    </div>

                    <div className="form-group">
                        <label>Department</label>
                        <select
                            name="department"
                            value={form.department}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="CS">Computer Science</option>
                            <option value="IT">Information Technology</option>
                            <option value="SE">Software Engineering</option>
                            <option value="DS">Data Science</option>
                            <option value="AI">Artificial Intelligence</option>
                        </select>
                        {errors.department && <p className="error-message">{errors.department}</p>}
                    </div>

                    <button type="submit" className="submit-btn">Add Student</button>
                </form>

                {message && <div className="success-message">{message}</div>}

                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Search students by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="students-list">
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                            <div key={student.id} className="student-item">
                                <div className="student-info">
                                    <div className="student-name">{student.name}</div>
                                    <div className="student-details">
                                        <span className="detail-item">CGPA: {student.cgpa}</span>
                                        <span className="detail-item">{student.department}</span>
                                        <span className="grade-badge">Grade: {calculateGrade(student.cgpa)}</span>
                                        <button className='remove-btn' onClick={() => removeStudent(student)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        <div className="no-students">
                            {students.length === 0 ? "No students found 🎓." : "No matching students found 🔍"}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default StudentPortal;