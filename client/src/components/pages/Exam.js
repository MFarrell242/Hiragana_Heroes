import React from 'react';

export default function Exam() {
    return (
        <div className="quizBox">
            <h1 className="quizwords">Quiz Page</h1>
            <p className="quizwords">This will be a page which quizzes the user on their knowledge
                of Hiragana, learned on the 'Learn' page.</p>
            <ul className="quizwords">
                <li>There will be three difficulties:</li>
                <li>Easy will feature two or three sets of characters, selected randomly.</li>
                <li>Medium will have around five sets</li>
                <li>Hard will feature the entire alphabet</li>
            </ul >
            <p className="quizwords">Each user's progress, measured in % correct over time, will be saved locally
                and accessed via the user's Google account as authentication.
            </p>
        </div>
    )
}