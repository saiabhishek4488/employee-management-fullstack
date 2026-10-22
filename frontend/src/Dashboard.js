import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {

    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1>UseContext Example</h1>
            <h2>Theme: {theme}</h2>
            <button className="btn btn-primary">
                Click Me
            </button>
        </div>
    );
}