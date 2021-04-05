
import * as Types from './../Constants/ActionTypes';
import CallApi from './../Utils/CallApi';
//FETCH_PRODUCT
export const actFetchProductsRequest = () =>{
    return (dispatch) => {
        CallApi('products','GET',null).then((res) => {
            dispatch(actFetchProducts(res.data))
        })
    };
}

export const actFetchProducts = (products) =>{
    return {
        type: Types.FETCH_PRODUCT,
        products
    };
}

//ADD_PRODUCT
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        CallApi('products','POST',product).then((res) => {
            dispatch(actAddProduct(res.data))
        })
    };
}
export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    };
}

//DELETE_PRODUCT
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        CallApi(`products/${id}`,'DELETE',null).then((res) => {
            dispatch(actDeleteProduct(res.data.id))
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

//EDIT_PRODUCT
export const actGetProductRequest = (id) => {
    return (dispatch) => {
        CallApi(`products/${id}`,'GET',null).then((res) => {
            dispatch(actGetProduct(res.data))
        })
    }
}
export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

//UPDATE_PRODUCT
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        CallApi(`products/${product.id}`,'PUT',product).then((res) => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}
export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}