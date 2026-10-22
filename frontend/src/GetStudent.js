
import { useEffect, useState } from "react";
import { getAllStudent } from "./StudentService";
import { deleteById } from "./StudentService";
import { useNavigate } from "react-router-dom";

export default function GetStudent() {
    const [student, setStudent] = useState([]);
    const navigate=useNavigate();

    const loadData = async () => {
        try {
            const result = await getAllStudent();
            console.log("Student data:", result.data);
            setStudent(result.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const remove=async(empno) => {
        await deleteById(empno);
        loadData();
    };

    return (
        <div>
            <h1>Student List Data</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {student.map((s) => (
                        <tr key={s.empno}>
                            <td>{s.empno}</td>
                            <td>{s.firstname}</td>
                            <td>{s.lastname}</td>
                            <td>{s.password}</td>
                            <td>
    <button
        type="button"
        onClick={() => navigate(`/edit/${s.empno}`)}
    >
        Edit
    </button>

    <button
    type="button"
    onClick={() => remove(s.empno)}
>
    Delete
</button>
</td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}