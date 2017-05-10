import React from 'react';
import { Link } from 'react-router';

export class Layout extends React.Component {
    constructor() {
        super();
    }
    render() {
        let title = 'About';
        return ( 
                <div>
                    <Link to="/" className="button" activeClassName="pseudo">Home</Link>
                    <Link to="/about" className="button" activeClassName="warning">About</Link>
                    <Link to="/contact" className="button" activeClassName="success">Contact</Link>
                    <Link to="/brand" className="button" activeClassName="pseudo">Brand</Link>
                    <Link to="/redux" className="button" activeClassName="error">Redux</Link>
                    <Link to="/products" className="button" activeClassName="success">ProdList</Link>
                    <Link to="/cart" className="button" activeClassName="success">cart</Link>
                    
                    
                    
                </div>
            
        );
    }
}