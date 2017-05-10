// ACTION CREATOR----- HELPER methods

import * as ActionTypes from './ActionTypes';


export const initPro = (products)=> {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        products: products
    }
}

export const loadingx = (status) => {
    return {
        type: ActionTypes.LOADING,
        loading: status
    }
}

export const editProduct = (product) => {
    return {
        type: ActionTypes.EDIT_PRODUCTS,
        product
    }
}