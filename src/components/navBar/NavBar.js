import { NavLink } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {

    const onActiveItem = (e) => {
        e.target.classList.add('active')
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">Currency converter &#128184;</div>
            <ul className="navbar-list">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" onClick={onActiveItem}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/converter" className="nav-link" onClick={onActiveItem}>Converter</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/current_course" className="nav-link" onClick={onActiveItem}>Current</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar