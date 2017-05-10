import { connect } from 'react-redux';

import ProductView from '../ProductView';

const mapStateToProps = (state) => {
    return {
        title: 'ProductView',
        product: state.productState.product 
    }
}

export default connect (mapStateToProps)(ProductView);

// import {connect} from "react-redux";

// import ProductView from "../components/Productview";

// const mapStateToProps = (state) => {
//     return {
//         title: "Product View",
//         product: state.product
//     }
// }

// //Container View
// export default connect(mapStateToProps) (ProductView);