import { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {

    const [message, setMessage] = useState('');

    useEffect(() => {

        axios.get("http://localhost:8080/api/v1/get")
            .then(response => response.data)
            .then(data => setMessage(data))
            .catch(error => console.log(error));

    }, []);

    return (
        <div>
            <p>Data from Spring Boot: {message}</p>
        </div>
    );
}

export default AxiosExample;