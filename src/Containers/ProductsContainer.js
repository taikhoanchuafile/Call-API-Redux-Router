import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actFetchProductsRequest,actDeleteProductRequest } from './../Actions/Index';
import Products from './../Components/Products';
import Product from './../Components/Product';

class ProductsContainer extends Component {

    componentDidMount = () => {
        this.props.fetchProducts();
    }

    showProducts = (products) => {
        var {onDeleteProduct} = this.props;
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product key={index} product={product} index={index} onDeleteProduct={onDeleteProduct} />
                );
            })
        }
        return result;
    }

    render() {
        var { products } = this.props;

        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            price : PropTypes.string.isRequired,
            status : PropTypes.bool.isRequired
        })
    ).isRequired
};

const mapStateToProps = (state) => {
    return {
        products: state.Products
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);