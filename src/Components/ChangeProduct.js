import React, { Component } from 'react';

class ChangeProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: "",
            txtPrice: "",
            chkbStatus: false
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { onAddProduct, history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {
            this.props.onUpdateProduct(product);
        } else{
            onAddProduct(product);
        }
        history.goBack();
    }

    componentDidMount = () => {
        var { match, onGetProduct } = this.props;
        if (match) {
            onGetProduct(match.params.id);
        }
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        var { itemEditing } = this.props;
        prevProps.itemEditing.id = "";
        if (itemEditing && itemEditing.id !== "") {
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form onSubmit={this.onSubmit}>
                    <legend>Thêm sản phẩm</legend>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập tên sản phẩm..."
                            name="txtName"
                            onChange={this.onHandleChange}
                            value={txtName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập giá sản phẩm..."
                            name="txtPrice"
                            onChange={this.onHandleChange}
                            value={txtPrice}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                defaultValue="true"
                                name="chkbStatus"
                                onChange={this.onHandleChange}
                                value={chkbStatus}
                                checked={chkbStatus}
                            />
                         Còn hàng
                     </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu</button>
                </form>
            </div>

        );
    }
}

export default ChangeProduct;