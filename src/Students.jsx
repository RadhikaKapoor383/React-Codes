import React from "react";

function StudentsData() {
    const students = [
        { id: 1, name: "Radhika", cgpa: 3.33 },
        { id: 2, name: "Mahek", cgpa: 3.41 },
        { id: 3, name: "Rida", cgpa: 3.91 }
    ]
    return (
        <div>
            {students.map((student) => (
                <div key={student.id}>
                    <h1>Name: {student.name}</h1>
                    <p>CGPA: {student.cgpa}</p>
                </div>
            ))}
        </div>
    )
}
export default StudentsData;
