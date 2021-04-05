import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Product extends Component {

    onDeleteProduct = (id) => {
        if (confirm('Bạn có chắn chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }

    render() {
        var {product,index} = this.props;
        var statusName = product.status === true ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status === true ? 'label label-danger' : 'label label-default';
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>
                    <span className={statusClass}>{statusName}</span>
                </th>
                <th>
                    <NavLink to={`/products/${product.id}/edit`}>
                        <button type="button" className="btn btn-success">Sửa</button>
                    </NavLink>
                    <button onClick={() => this.onDeleteProduct(product.id)} type="button" className="btn btn-warning ml-10">Xóa</button>
                </th>
            </tr>
        );
    }
}

export default Product;