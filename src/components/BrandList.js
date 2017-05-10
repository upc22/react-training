import React from 'react';

export class BrandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            loading: false
        }
    }
    componentDidMount() {

        this.setState({
            loading: true
        })

        fetch('http://localhost:7070/api/brands')
        .then(resp => {
            let x = resp.json();
        console.log(x);
        return x;    
        })
        .then(brands => {
            this.setState({
                brands,
                loading: false
            })
        })
    }
    render() {
        let brandlist = this.state.brands.map(brand => <li key={brand.id}>{brand.name}</li>)
        return (
            <div>
                <ul>
                    {brandlist}
                </ul>
            </div>
        );
    }
}