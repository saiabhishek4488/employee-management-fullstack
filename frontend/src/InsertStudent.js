import { useState } from "react";
import { saveStudent } from "./StudentService";
import { useNavigate } from "react-router-dom";

export default function InsertStudent() {
    const navigate=useNavigate();

    const [student, setStudent] = useState({
        firstname: "Bayappa",
        lastname: "Abhishek",
        password: "abcd",
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async () => {
        try {
            const response = await saveStudent(student);
            navigate("/get");
            alert("Student inserted successfully!");
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to insert student. Check the backend.");
        }
    };

    return (
        <div>
            <h1>Insert Data in Student</h1>

            <input
                type="text"
                name="firstname"
                value={student.firstname}
                onChange={handleChange}
                placeholder="First Name"
            />

            <input
                type="text"
                name="lastname"
                value={student.lastname}
                onChange={handleChange}
                placeholder="Last Name"
            />

            <input
                type="password"
                name="password"
                value={student.password}
                onChange={handleChange}
                placeholder="Password"
            />

            <button type="button" onClick={submit}>
                Submit
            </button>
        </div>
    );
}