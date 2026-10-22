import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Insert</Link>
                </li>
                <li>
                    <Link to="/get">Get</Link>
                </li>
                <li>
                    <Link to="/edit">Edit</Link>
                </li>
            </ul>
        </nav>
    );
}