import * as ActionType from './ActionTypes';


const initState = {
    products: [{name: 'iphone', id: 1}],
    loading: false,
    product: {}
}

export default function (state = initState,action) {
    switch(action.type) {
        case ActionType.INIT_PRODUCTS : { 
            return Object.assign({},state,{products: action.products});
        }
        break;
        case ActionType.LOADING: {
            return {
                loading: action.loading,
                products: state.products,
                product: state.product  
            };
           
        }
         break;
         case ActionType.EDIT_PRODUCTS : { 
            return {
                products: state.products,
                loading: state.loading,
                product: action.product
            };
            
        }
        default: {
            return state;
        }
    }
}