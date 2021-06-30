import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className="menu">Home</Link></li>
                        <li><Link to="/portfolio" className="menu">Portifólio</Link></li>
                        <li><Link to="/sobre" className="menu">Sobre</Link></li>
                        <li><Link to="/faleconosco" className="menu">Fale Conosco</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;