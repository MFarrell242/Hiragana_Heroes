//frontpage, both login screen...
//...and "Hello, 'your name', ready to get started?"
//I'd suggest (to myself), make this page have stats and stuff once you log in
//Maybe something fun at the end, like a japanese pun generator?

import React from 'react';

export default function Splash() {
    return (
        <div className="splashContain">
            <h1 className="quizwords">Welcome to Hiragana Heroes!</h1>
            <h2 className="quizwords">The "best" resource on the internet for learning to read and write Hiragana.</h2>
        </div>
    )
}