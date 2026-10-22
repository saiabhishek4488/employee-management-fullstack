import React, { useEffect, useState } from "react";

function FunctionalComponent() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos/1744")
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log(error));

    }, []);

    return (
        <div>

            {user &&
                <div>
                    <p>User ID: {user.userId}</p>
                    <p>ID: {user.id}</p>
                    <p>Title: {user.title}</p>
                    <p>Completed: {user.completed ? "Yes" : "No"}</p>
                </div>
            }

        </div>
    );
}

export default FunctionalComponent;