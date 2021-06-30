import React, { Component } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Sobre from './components/Sobre';
import FaleConosco from './components/FaleConosco';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Menu />
                    <Route exact path="/"><Home /></Route>
                    <Route path="/sobre"><Sobre /></Route>
                    <Route path="/faleconosco"><FaleConosco /></Route>
                </Router>
            </div>
        );
    }
}

export default App;