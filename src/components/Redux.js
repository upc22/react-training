import React from 'react';
import {createStore} from 'redux';


const initState = [];
function memberReducer(state= initState, action ) {
    switch(action.type) {
        case "ADD": 
            return [...state, action.value];
            break;
        case "REMOVE": 
            return state.filter(m => m != action.value);
            break;
        default: {
            return state;
        }
    }
}

let store = createStore(memberReducer);
store.subscribe(() => {
});


store.dispatch(addActionCreator())

function addActionCreator() {
    return  {
        type: 'ADD',
        value: 'react'
    } 
}
store.dispatch({
    type: 'ADD',
    value: 'ng'
})

export class Redux extends React.Component {
    componentDidMount() {
        store.subscribe(
            () => {this.forceUpdate();} 
        ) 
        this.memberInput.focus();
        
    };
    addMember(params) {
        store.dispatch({
            type: 'ADD',
            value: params
        })
    }

    removeMember() {
        store.dispatch({
        type: 'REMOVE',
        value: 'React'
    })}
    render() {
    let memberList = store.getState().map((m,i) => <li key={i}>{m}</li>);
        
        return (
            <div><h1>Redux</h1>
            <input name = 'member' 
                   ref={(element)=> this.memberInput = element}/>
            <button onClick={ ()=>this.addMember(this.memberInput.value) }> ADD</button>
            <button onClick={ ()=>this.removeMember() }>REMOVE</button>
            
            <ul>{memberList}</ul></div>
        );
    }
}