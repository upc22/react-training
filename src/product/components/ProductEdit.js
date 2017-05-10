import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router';

import * as Actions from '../Action'

class ProductEdit extends React.Component {
    componentDidMount() {
        this.props.setLoading(true);
        fetch('http://localhost:7070/api/products/' + this.props.params.id)
        .then(resp => resp.json())
        .then(
            (product) => {
                this.props.initPro(product);
                this.props.setLoading(false);
            }
        );
    }
    render() {
        console.log(this.props);
        return (
            <div>
                ID : {this.props.params.id}
                        <Link to={`/products/view/${this.props.params.id}`} className="button">View </Link>  

                <form>
                    <label>Name: </label>
                    <input name='name' 
                           value={this.props.product.name} 
                           ref={(element)=> this.memberInput = element}
                    />
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.productState.product,
        loading: state.loading
    }
}
const mapDispatch = (dispatch) => {
    return {
        initPro: (product) => dispatch(Actions.editProduct(product)),
        setLoading: (status) => dispatch(Actions.loadingx(status))
    }
}

export default connect(mapStateToProps,mapDispatch) (ProductEdit)