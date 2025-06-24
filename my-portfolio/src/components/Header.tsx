import React from 'react';
import "./Header.css"
import "./General.css"

const Header: React.FC = () => {
    return (
        <header className="component">
            <div className="header-content">
                <h1 className="name">Joe Smith</h1>
                <nav className="header-nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header