import { useState } from 'react';

function UniversityApplicationForm() {
  const [step, setStep]           = useState(1);
  const [form, setForm]           = useState({
    name: '', age: '', email: '',
    degree: "Bachelor's",
    university: '', cgpa: '',
    graduationYear: ''
  });
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function validateStep() {
    const newErrors = {};
    if (step === 1) {
      if (!form.name.trim())
        newErrors.name = "Name required ❌";
      if (!form.age || Number(form.age) < 18 || Number(form.age) > 60)
        newErrors.age = "Age must be 18-60 ❌";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
        newErrors.email = "Valid email required ❌";
    }
    if (step === 2) {
      if (!form.university.trim())
        newErrors.university = "University required ❌";
      if (!form.graduationYear || form.graduationYear < 1990
          || form.graduationYear > new Date().getFullYear())
        newErrors.graduationYear = "Valid year required ❌";
      if (!form.cgpa)
        newErrors.cgpa = "CGPA required ❌";
      else if (Number(form.cgpa) < 0 || Number(form.cgpa) > 4)
        newErrors.cgpa = "CGPA must be 0-4 ❌";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // ✅ Fix 4 — errors sirf success par clear
  function handleNext() {
    if (validateStep()) {
      setStep(prev => prev + 1);
      setErrors({});
    }
  }

  function handleBack() {
    setStep(prev => prev - 1);
    setErrors({});
  }

  // ✅ Fix 1 & 2 — progress bar sahi
  const progress = (step / 3) * 100;

  const inputStyle = (errorKey) => ({
    width: "100%", padding: "10px",
    borderRadius: "8px", boxSizing: "border-box",
    border: errors[errorKey] ? "2px solid red" : "2px solid #ccc",
    marginBottom: "5px", fontSize: "15px"
  });

  const errorStyle = {
    color: "red", fontSize: "12px",
    marginBottom: "10px", marginTop: "-3px"
  };

  const labelStyle = {
    display: "block", fontWeight: "bold",
    marginBottom: "5px", color: "#444",
    textAlign: "left"
  };

  // ✅ Fix 6 — submitted hone par sirf success
  if (submitted) {
    return (
      <div style={{
        maxWidth: "480px", margin: "30px auto",
        padding: "40px", borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        fontFamily: "Arial", backgroundColor: "white",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#4F46E5" }}>
          Application Submitted! 🎉
        </h2>
        <p style={{ color: "#666" }}>Welcome, {form.name}!</p>
        {[
          ["Name", form.name],
          ["Age", form.age],
          ["Email", form.email],
          ["Degree", form.degree],
          ["University", form.university],
          ["Graduation Year", form.graduationYear],
          ["CGPA", form.cgpa],
        ].map(([label, value]) => (
          <div key={label} style={{
            display: "flex", justifyContent: "space-between",
            padding: "10px 0", borderBottom: "1px solid #eee",
            textAlign: "left"
          }}>
            <strong>{label}:</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: "480px", margin: "30px auto",
      padding: "30px", borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      fontFamily: "Arial", backgroundColor: "white"
    }}>
      <h2 style={{
        color: "#4F46E5", marginBottom: "10px",
        borderBottom: "2px solid #eee", paddingBottom: "10px"
      }}>
        🎓 University Application
      </h2>

      {/* Step Indicator */}
      <p style={{ textAlign: "center", color: "#666",
                  fontSize: "14px", marginBottom: "10px" }}>
        Step {step} of 3
      </p>

      {/* ✅ Fix 1 & 2 — Progress Bar */}
      <div style={{ backgroundColor: "#eee", height: "8px",
                    borderRadius: "10px", marginBottom: "25px" }}>
        <div style={{
          width: `${progress}%`,
          backgroundColor: "#4F46E5",
          height: "8px", borderRadius: "10px",
          transition: "width 0.4s ease"
        }} />
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3 style={{ color: "#4F46E5", marginBottom: "15px" }}>
            👤 Personal Info
          </h3>
          <label style={labelStyle}>Name:</label>
          <input type="text" name="name" value={form.name}
            onChange={handleChange} style={inputStyle("name")} />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}

          <label style={labelStyle}>Age:</label>
          <input type="number" name="age" value={form.age}
            onChange={handleChange} style={inputStyle("age")} />
          {errors.age && <p style={errorStyle}>{errors.age}</p>}

          <label style={labelStyle}>Email:</label>
          <input type="email" name="email" value={form.email}
            onChange={handleChange} style={inputStyle("email")} />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 style={{ color: "#4F46E5", marginBottom: "15px" }}>
            🎓 Academic Info
          </h3>
          <label style={labelStyle}>Degree:</label>
          <select name="degree" value={form.degree}
            onChange={handleChange} style={inputStyle("degree")}>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>

          <label style={labelStyle}>University:</label>
          <input type="text" name="university"
            value={form.university} onChange={handleChange}
            style={inputStyle("university")} />
          {errors.university &&
            <p style={errorStyle}>{errors.university}</p>}

          <label style={labelStyle}>Graduation Year:</label>
          <input type="number" name="graduationYear"
            value={form.graduationYear} onChange={handleChange}
            style={inputStyle("graduationYear")} />
          {errors.graduationYear &&
            <p style={errorStyle}>{errors.graduationYear}</p>}

          <label style={labelStyle}>CGPA:</label>
          <input type="number" step="0.01" name="cgpa"
            value={form.cgpa} onChange={handleChange}
            style={inputStyle("cgpa")} />
          {errors.cgpa && <p style={errorStyle}>{errors.cgpa}</p>}
        </div>
      )}

      {/* ✅ Fix 3 — Step 3 Review */}
      {step === 3 && (
        <div>
          <h3 style={{ color: "#4F46E5", marginBottom: "15px" }}>
            📋 Review Your Application
          </h3>
          {[
            ["Name", form.name],
            ["Age", form.age],
            ["Email", form.email],
            ["Degree", form.degree],
            ["University", form.university],
            ["Graduation Year", form.graduationYear],
            ["CGPA", form.cgpa],
          ].map(([label, value]) => (
            <div key={label} style={{
              display: "flex", justifyContent: "space-between",
              padding: "10px 0", borderBottom: "1px solid #eee"
            }}>
              <strong>{label}:</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between",
                    marginTop: "25px", gap: "10px" }}>
        {step > 1 && (
          <button onClick={handleBack} style={{
            padding: "10px 20px", borderRadius: "8px",
            border: "2px solid #4F46E5", backgroundColor: "white",
            color: "#4F46E5", cursor: "pointer", fontSize: "15px"
          }}>
            ← Back
          </button>
        )}
        {step < 3 && (
          <button onClick={handleNext} style={{
            padding: "10px 25px", borderRadius: "8px",
            backgroundColor: "#4F46E5", color: "white",
            border: "none", cursor: "pointer",
            fontSize: "15px", marginLeft: "auto"
          }}>
            Next →
          </button>
        )}
        {step === 3 && (
          <button onClick={() => setSubmitted(true)} style={{
            padding: "10px 25px", borderRadius: "8px",
            backgroundColor: "#16A34A", color: "white",
            border: "none", cursor: "pointer",
            fontSize: "15px", marginLeft: "auto"
          }}>
            Submit 🚀
          </button>
        )}
      </div>
    </div>
  );
}

export default UniversityApplicationForm;