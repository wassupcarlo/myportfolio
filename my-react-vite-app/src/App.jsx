import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import MyMusic from './components/MyMusic';
import Credits from './components/Credits';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <MyMusic />
            <Credits />
            <Footer />
        </>
    );
}

export default App;