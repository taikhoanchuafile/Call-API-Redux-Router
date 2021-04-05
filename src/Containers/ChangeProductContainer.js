import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest,actUpdateProductRequest } from '../Actions/Index';
import ChangeProduct from '../Components/ChangeProduct';


class AddProduct extends Component {
    render() {
        var { onAddProduct, history, onGetProduct, match, itemEditing, onUpdateProduct } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <ChangeProduct
                        onAddProduct={onAddProduct}
                        match={match}
                        history={history}
                        onGetProduct={onGetProduct}
                        itemEditing={itemEditing}
                        onUpdateProduct = {onUpdateProduct}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.ItemEditing
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onGetProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);