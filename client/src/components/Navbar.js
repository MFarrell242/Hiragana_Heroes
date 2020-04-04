//Navbar, at top of every page

import React from 'react';

export default function Navbar() {
    return (
        <header className='navigator topLayer'>
            <h1 className="homeName">Are you ready to be... a Hiragana Hero?</h1>
            <a href="/" className="navLink homeLink">Home</a>
            <a href="/Hira101" className="navLink learnLink">Learn</a>
            <a href="/HiraQuiz" className="navLink quizLink">Test Your Knowledge</a>
        </header>
    )
}