import { NavLink } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {

    //рефы для стилизации ссылок
    return (
        <nav className="navbar">
            <div className="navbar-brand">Currency converter &#128184;</div>
            <ul className="navbar-list">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/converter" className="nav-link">Converter</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/current_course" className="nav-link">Current</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar