import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
          <a href="https://www.linkedin.com/in/giancarlo-passariello/">
            <img id="social-logo" src="/In-White-128@2x.png"></img>
          </a>
          <p>
            <span>Copyright 2025 &#169; Giancarlo Passariello</span>
          </p>
          <p id="version">
            Version 1.0.4
          </p>
        </footer>
    );
}

export default Footer;