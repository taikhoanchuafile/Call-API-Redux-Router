import * as Types from './../Constants/ActionTypes';

var initialState = [];
var findIndexProduct = (states,id) => {
    var result = null;
    if (states.length > 0) {
        states.forEach((state,index) => {
            if (state.id === id) {
                result = index;
            }
        });
    }
    return result;
};

var products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.DELETE_PRODUCT:
            index = findIndexProduct(state,action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.UPDATE_PRODUCT :
            index = findIndexProduct(state,action.product.id);
            if (index !== -1) {
                state[index] = action.product;
            }
            return [...state];
        default:
            return [...state];
    }
};

export default products;
