import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Products extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <NavLink to="/products/add">
                <button type="button" className="btn btn-success">Thêm sản phẩm</button>
                </NavLink>
                <hr />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;