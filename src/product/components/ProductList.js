import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router';
import * as actions from '../Action';

import { bindActionCreators} from 'redux';
import { addItemtoCart} from '../../cart/actions';

class ProductList extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://localhost:7070/api/products/')
        .then(resp => resp.json())
        .then(products=> {
            this.props.setLoading(false);
            this.props.initPro(products);
        })
    }

    render() {
        if(this.props.loading)
            return <h2>loading....</h2>
        
        let prodList = this.props.products.map((m,i) => <li key={m.id}>
        <Link to={`/products/edit/${m.id}`}>{m.name}</Link>
        <button onClick= {() => this.props.addItemtoCart(m)}>+</button>
        </li>);
        
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>{prodList}</ul>
            </div>
        );
    }
}

//state = store.getState()
const mapReduxStateToComponentProps = (state) => {
    return {
        title: "Product List", //this.props.title
        products: state.productState.products,
        loading: state.productState.loading
    }
}

//dispatch => store.dispatch
const mapReduxDispatchToComponentProps = (dispatch) => {
    return {
        // initPro: (products) => dispatch(actions.initPro(products)),
        // setLoading: (status) => dispatch(actions.loadingx(status))

        initPro : bindActionCreators(actions.initPro, dispatch),

        setLoading : bindActionCreators(actions.loadingx, dispatch),

        addItemtoCart : bindActionCreators(addItemtoCart, dispatch)
    }
}

export default  connect(mapReduxStateToComponentProps, mapReduxDispatchToComponentProps)
                (ProductList)