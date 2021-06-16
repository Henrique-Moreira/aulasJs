import React, { Component } from 'react';
import '../mystyles/styles.css';

class KmToMiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kilometer: 0,
            result: ""
        };
    }

    update = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            result: ""
        });
    }

    convert = () => {
        this.setState({result: (this.state.kilometer / 1.609).toFixed(2)});
    }

    render() {
        return (
            <div className="converterBox">
               <h2>Kilometros para Milhas</h2>
               <input type="text" name="kilometer" placeholder="Km" onChange={this.update}/>
               <button onClick={this.convert}>Converter</button>
               <p>Milhas: {this.state.result}</p>
            </div>
        );
    }
}

export default KmToMiles;