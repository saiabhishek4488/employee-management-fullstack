
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UseFormExample() {

    const [user, setUser] = useState({
        firstname: 'a',
        lastname: 'b',
        branch: 'c'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    return (
        <div className="container mt-4">
            <h2>Use Form Example</h2>

            <form>
                <input
                    className="form-control mb-2"
                    type="text"
                    name="firstname"
                    placeholder="Enter first name"
                    value={user.firstname}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="text"
                    name="lastname"
                    placeholder="Enter last name"
                    value={user.lastname}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="text"
                    name="branch"
                    placeholder="Enter branch"
                    value={user.branch}
                    onChange={handleChange}
                />
            </form>

            <hr />

            <h3>First Name: {user.firstname}</h3>
            <h3>Last Name: {user.lastname}</h3>
            <h3>Branch: {user.branch}</h3>
        </div>
    );
}