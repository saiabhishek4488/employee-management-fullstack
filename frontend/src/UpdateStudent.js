
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getStudentById,
    updateStudent
} from "./StudentService";

export default function UpdateStudent() {
    const navigate = useNavigate();
    const { empno } = useParams();

    const [student, setStudent] = useState({
        firstname: "",
        lastname: "",
        password: ""
    });

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const response = await getStudentById(empno);
                setStudent(response.data);
            } catch (error) {
                console.error("Error fetching student:", error);
            }
        };

        loadStudent();
    }, [empno]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const submit = async () => {
        try {
            await updateStudent(empno, student);
            alert("Student updated successfully");
            navigate("/get");
        } catch (error) {
            console.error("Error updating student:", error);
            alert("Failed to update student");
        }
    };

    return (
        <div>
            <h1>Edit Student</h1>
            <h3>Employee ID: {empno}</h3>
            
<input
    type="text"
    name="empno"
    value={empno || ""}
    placeholder="Employee ID"
    readOnly
/>


            <input
                type="text"
                name="firstname"
                value={student.firstname || ""}
                onChange={handleChange}
                placeholder="First Name"
                
            />

            <input
                type="text"
                name="lastname"
                value={student.lastname || ""}
                onChange={handleChange}
                placeholder="Last Name"
            />

            <input
                type="password"
                name="password"
                value={student.password || ""}
                onChange={handleChange}
                placeholder="Password"
            />

            <button type="button" onClick={submit}>
                Update
            </button>
        </div>
    );
}