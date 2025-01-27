import React from 'react';
import './About.css';

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <section className="about-section">
                <div id="about-img-div">
                    <img id="kennyman" src="src\assets\IMG_2769.PNG"></img>
                </div>
                <div id="about-desc-div">
                    <p>Hi my name is Giancarlo. I am a 3rd year Computer Science student. I speak Italian, English, French and a little bit of Spanish. In my free time, I like to make beats for musicians.</p>
                </div>
            </section>
        </section>
    );
}

export default About;