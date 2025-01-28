import './About.css';

function About() {
    return (
        <section id="about-section">
            <h2>About Me</h2>
            <section className="about-section">
                <div id="about-img-div">
                    <img id="kennyman" src="/IMG_2769.PNG"></img>
                </div>
                <div id="about-desc-div">
                    <p>Hi my name is Giancarlo. I am a 3rd year Computer Science student. I speak Italian, English, French and a little bit of Spanish. In my free time, I like to make beats for musicians. 
                        Many people ask me why I decided to go into Computer Science and I'd like to say why. 
                        As I stated before, I make beats, and me being on the computer often making them, I gained interest in how my music software was made and gained interest in programming and coding. 
                        I am currently seeking an internship and I am capable of making basic mobile applications, modern-looking websites and software applications.
                    </p>
                </div>
            </section>
        </section>
    );
}

export default About;