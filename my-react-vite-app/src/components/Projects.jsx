import React from 'react';
import './Projects.css';

function Projects() {
    const webLanguages = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Mocha', 'Chai', 'SuperTest', 'MongoDB', 'Express.js'];

    return (
        <section>
            <h2>Projects</h2>
            <section className="outer-section">
                <h3>Vehicle Theft Crimes in Montreal</h3>
                <p>
                    {webLanguages.map((language, index) => (
                        <span id="proj-languages" key={index}>
                            {language}
                            {index < webLanguages.length - 1 ? '    ' : ''}
                        </span>
                    ))}
                </p>
                <p>This project combines data science techniques with social research methodologies to offer a comprehensive understanding of motor vehicle theft patterns in Montreal. By examining the interplay between crime statistics and sociodemographic factors, it aims to contribute valuable insights for policymakers, law enforcement agencies, and community organizations working towards safer and more equitable urban environments.</p>
                <a href="https://github.com/wassupcarlo/Vehicle-Theft-Crimes-in-Montreal"><img className="github-button" src="src\assets\GitHub_Logo.png" ></img></a>
            </section>
        </section>
    );
}

export default Projects;