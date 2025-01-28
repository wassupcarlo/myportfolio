import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills-section">
            <h2>Skills</h2>
            <section className="outer-section">
              <img className="language-framework-logo" src="src\assets\LanguageLogos\csharp.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\java.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\kotlin.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\python.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\html-5.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\css.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\javascript.svg"></img>
              <img className="language-framework-logo" src="src\assets\LanguageLogos\sql.svg"></img>
              <img className="language-framework-logo" src="src\assets\FrameworkLogos\react.svg"></img>
              <img className="language-framework-logo" src="src\assets\FrameworkLogos\node-js.svg"></img>
              <img className="language-framework-logo" src="src\assets\FrameworkLogos\git.png"></img>
            </section>
        </section>
    );
}

export default Skills;