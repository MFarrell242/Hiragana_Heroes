//Navbar, at top of every page

import React from 'react';

export default function Navbar() {
    return (
        <div className='navigator topLayer'>
            <a href="/" className="navLink homeLink">Home</a>
            <a href="/Hira101" className="navLink learnLink">Learn</a>
            <a href="/HiraQuiz" className="navLink quizLink">Test Your Knowledge</a>
        </div>
    )
}