import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from "./pages/Splash";
import Learn from "./pages/Learn";
import Exam from './pages/Exam';

export default function Shell() {
    return (
        <div className="contentBox">
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/Hira101" component={Learn} />
                <Route exact path="/HiraQuiz" component={Exam} />
            </Switch>
        </div>
    )
}