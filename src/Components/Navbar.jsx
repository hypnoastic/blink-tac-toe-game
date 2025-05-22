import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title">Blink Tac Toe</Link>
            <div className="navbar-links">
                <Link to="/how-to-play" className="how-to-play-link">How to Play</Link>
            </div>
        </nav>
    );
}

export default Navbar;