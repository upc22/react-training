import React from 'react';
import { Component } from 'react';

export default class Contact extends Component {
    
    constructor() {
        super();
        this.state = {
            city: 'delhi'
        };
        // setInterval(() => {
        //     this.setState ({
        //         city: 'udaipur'
        //     })
        // },2000); 
    }

    
    render() {                
        return (
            <div>
                <h2>Contact</h2>
                <Address city={this.state.city} state='Delhi'/>
            </div>
        );
    }
}

class Address extends Component {
    constructor(props) {
        super(props);
    }

    ComponentWillreceiveProps(nextProps) {
        console.log(nextProps);
    }
    render() {
        return (
            <div>
                <h3>Address : {this.props.city}, {this.props.state} </h3>              
            </div>
        );
    }
}

Address.defaultProps = {
    city: "Udaipur",
    state: "Rajasthan"
}