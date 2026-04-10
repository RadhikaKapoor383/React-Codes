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
        setErrors(newErrors);
    }
}