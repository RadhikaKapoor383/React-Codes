import { useState, useEffect } from 'react';

function UniversityApplicationForm() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: '', age: '', email: '',
        degree: 'Bachelors', university: '', graduationYear: '',
        cgpa: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    function validateStep() {
        const newErrors = {};
        if (step === 1) {
            if (!form.name.trim())
                newErrors.name = 'Name required ❌';
            if (!form.age || form.age < 18
                || form.age > 60)
                newErrors.age = 'Age must be 18-60 ❌';
            if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
                newErrors.email = 'Email required ❌';
        }
        if (step === 2) {
            if (!form.university.trim())
                newErrors.university = 'University required ❌';
            if (!form.graduationYear || form.graduationYear < 1990
                || form.graduationYear > new Date().getFullYear())
                newErrors.graduationYear = 'Valid graduation year required ❌';
        }
        if (step === 3) {
            if (!form.cgpa || form.cgpa < 0 || form.cgpa > 4)
                newErrors.cgpa = 'CGPA must be between 0 and 4 ❌';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    function handleNext() {
        if (validateStep()) {
            setStep(prev => prev + 1);
        }
        setErrors({});
    }
    function handleBack() {
        setStep(prev => prev - 1);
        setErrors({});
    }

    const progress = (step / 3) * 100 + '%';

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center" }}>University Application</h2>
            <div style={{
                backgroundColor: "#eee",
                height: "8px", borderRadius: "10px",
                marginBottom: "25px"
            }}>
                <div style={{
                    width: `${progress}%`,
                    backgroundColor: "#4F46E5",
                    height: "8px", borderRadius: "10px",
                    transition: "width 0.4s ease"
                }} />
            </div>
            {step === 1 && (
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} style={{
                        width: "100%", padding: "10px",
                        borderRadius: "8px", boxSizing: "border-box",
                        border: errors.name
                            ? "2px solid red"    // ← error hone par red!
                            : "2px solid #ccc",
                        marginBottom: "5px"
                    }} />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    <label>Age:</label>
                    <input type="number" name="age" value={form.age} onChange={handleChange} style={{
                        width: "100%", padding: "10px",
                        borderRadius: "8px", boxSizing: "border-box",
                        border: errors.age
                            ? "2px solid red"    // ← error hone par red!
                            : "2px solid #ccc",
                        marginBottom: "5px"
                    }} />
                    {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} style={{
                        width: "100%", padding: "10px",
                        borderRadius: "8px", boxSizing: "border-box",
                        border: errors.email
                            ? "2px solid red"    // ← error hone par red!
                            : "2px solid #ccc",
                        marginBottom: "5px"
                    }} />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
            )}
            {step === 2 && (
                <div>
                    <label>Degree:</label>
                    <select name="degree" value={form.degree} onChange={handleChange}>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="PhD">PhD</option>
                    </select>
                    <label>University:</label>
                    <input type="text" name="university" value={form.university} onChange={handleChange} />
                    {errors.university && <p style={{ color: "red" }}>{errors.university}</p>}
                    <label>Graduation Year:</label>
                    <input type="number" name="graduationYear" value={form.graduationYear} onChange={handleChange} />
                    {errors.graduationYear && <p style={{ color: "red" }}>{errors.graduationYear}</p>}
                </div>
            )}
            {step === 3 && (
                <div>
                    <label>CGPA:</label>
                    <input type="number" step="0.01" name="cgpa" value={form.cgpa} onChange={handleChange} />
                    {errors.cgpa && <p style={{ color: "red" }}>{errors.cgpa}</p>}
                </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                {step > 1 && <button onClick={handleBack}>Back</button>}
                {step < 3 && <button onClick={handleNext}>Next</button>}
                {step === 3 && <button onClick={() => {
                    if (validateStep()) {
                        setSubmitted(true);
                    }
                }}>Submit</button>}
            </div>
            {submitted && (
                <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#d4edda", border: "1px solid #c3e6cb", borderRadius: "5px" }}>
                    <h3>Application Submitted!</h3>
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Age:</strong> {form.age}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Degree:</strong> {form.degree}</p>
                    <p><strong>University:</strong> {form.university}</p>
                    <p><strong>Graduation Year:</strong> {form.graduationYear}</p>
                    <p><strong>CGPA:</strong> {form.cgpa}</p>
                </div>
            )}
        </div>
    );
}
export default UniversityApplicationForm;