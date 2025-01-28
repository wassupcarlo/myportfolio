import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills-section">
            <h2>Skills</h2>
            <section className="outer-section">
              <img className="language-framework-logo" src="LanguageLogos\csharp.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\java.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\kotlin.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\python.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\html-5.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\css.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\javascript.svg"></img>
              <img className="language-framework-logo" src="LanguageLogos\sql.svg"></img>
              <img className="language-framework-logo" src="FrameworkLogos\react.svg"></img>
              <img className="language-framework-logo" src="FrameworkLogos\node-js.svg"></img>
              <img className="language-framework-logo" src="FrameworkLogos\git.png"></img>
            </section>
        </section>
    );
}

export default Skills;