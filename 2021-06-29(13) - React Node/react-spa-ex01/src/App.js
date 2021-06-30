import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sobre from './components/Sobre';
import FaleConosco from './components/FaleConosco';
import Portfolio from './components/Portifolio/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/sobre"><Sobre /></Route>
                    <Route path="/faleconosco"><FaleConosco /></Route>
                    <Route path="/portfolio"><Portfolio/></Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;