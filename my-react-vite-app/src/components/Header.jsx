import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
    return (
        <header>
            <h1>Giancarlo Passariello</h1>
            <nav>
                <ul>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#skills-section">Skills</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#experience-section">Experience</a></li>
                </ul>
            </nav>
            <div className="dark-mode-container">
                <span>🌞</span>
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                    <span className="slider round"></span>
                </label>
                <span>🌙</span>
            </div>
        </header>
    );
}

export default Header;