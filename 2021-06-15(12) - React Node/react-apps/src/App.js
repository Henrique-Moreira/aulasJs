import React, { Component } from 'react';
import Header from './components/Header';
import UniversalConverter from './components/UniversalConverter';

class App extends Component {
    render() {
        return (
            <>
            <Header/>
            <UniversalConverter/>
            </>
        );
    }
}

export default App;