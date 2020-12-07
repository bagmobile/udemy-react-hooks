import {NavLink} from "react-router-dom";

export const NavBar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            GitHub search
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/" exact className="nav-link">Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">Info</NavLink>
            </li>
        </ul>
    </nav>
);
