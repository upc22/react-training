import React from 'react';
import { Component } from 'react';

export class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.tLikes
        };
    }
    increment(e) {
        this.setState ({
                likes : this.state.likes+1
        });
        this.props.update(1);
    }
    decrement(e) {
        this.setState ({
                likes : this.state.likes-1
        });
        this.props.update(-1);
    }
    componentWillMount() {
        console.log('called componentWillMount');
    }
    componentDidMount() {
        console.log('called componentDidMount');
    }
    shouldComponentUpdate() {
        if(this.state.likes % 2) {
            return false;
        }
        return true;
    }
    render() {
        console.log('called render');        
        let title = 'Like Page';
        return (
            <div>
                <h2>{title} :  {this.state.likes}</h2>
                <button onClick = {this.increment.bind(this)}>+1</button> 
                <button onClick = {(e)=>{ this.decrement(e)}}>-1</button>
                
            </div>
        );
    }
}