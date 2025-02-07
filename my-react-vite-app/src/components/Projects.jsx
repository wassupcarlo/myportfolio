import React from 'react';
import './Projects.css';

function Projects() {
    const webLanguages = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 
        'Mocha', 'Chai', 'SuperTest', 'MongoDB', 'Express.js'];
    const medappLanguages = ['Python', 'Flask', 'Jinja', 'SQL', 'REST', 'HTML', 
        'CSS', 'Docker'];
    const nocapocucinaLanguages = ['C#', 'Entity Framework'];

    return (
        <section id="projects-section">
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
                <a href="https://github.com/wassupcarlo/Vehicle-Theft-Crimes-in-Montreal">
                    <img className="github-button" src="/github-mark.png" ></img>
                </a>
                <a href="https://gitlab.com/giancarlopassariello/Vehicle-Theft-Crimes-in-Montreal">
                    <img className="gitlab-button" src="/gitlab-logo-500.svg"></img>
                </a>
            </section>
            <section className="outer-section">
                <h3>Medical Application Project</h3>
                <p>
                    {medappLanguages.map((language, index) => (
                        <span id="proj-languages" key={index}>
                            {language}
                            {index < medappLanguages.length - 1 ? '    ' : ''}
                        </span>
                    ))}
                </p>
                <p>This Medical Application enables users to book appointments with doctors and provides a comprehensive platform for managing patient care. Doctors can add and modify patient notes, as well as accept or deny appointment requests. The website incorporates a role-based permission system, granting administrators enhanced control over website settings. Additionally, the project includes a REST API, allowing seamless access to and manipulation of data in JSON format.</p>
                <a href="https://github.com/wassupcarlo/Medical-Application-Project">
                    <img className="github-button" src="/github-mark.png" ></img>
                </a>
                <a href="https://gitlab.com/giancarlopassariello/medical-app-project">
                    <img className="gitlab-button" src="/gitlab-logo-500.svg"></img>
                </a>
            </section>
            {/* <section className="outer-section">
                <h3>NoCapoCucina</h3>
                <p>
                    {nocapocucinaLanguages.map((language, index) => (
                        <span id="proj-languages" key={index}>
                            {language}
                            {index < nocapocucinaLanguages.length - 1 ? '    ' : ''}
                        </span>
                    ))}
                </p>
                <p></p>
                <a href="https://github.com/wassupcarlo/NoCapoCucina">
                    <img className="github-button" src="/github-mark.png" ></img>
                </a>
                <a href="https://gitlab.com/giancarlopassariello/no-capo-cucina">
                    <img className="gitlab-button" src="/gitlab-logo-500.svg"></img>
                </a>
            </section> */}
        </section>
    );
}

export default Projects;