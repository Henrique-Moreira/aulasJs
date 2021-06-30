import React, { Component } from 'react';
import PortfolioIntro from './PortfolioIntro';
import PortfolioProducts from './PortfolioProducts';
import PortfolioDetails from './PortfolioDetails';

class Portfolio extends Component {
    render() {
        return (
            <main>
                <PortfolioIntro/>
                <PortfolioProducts/>
                <PortfolioDetails/>
            </main>
        );
    }
}

export default Portfolio;