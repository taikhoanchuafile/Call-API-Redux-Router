import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const menus = [
    {
        exact: true,
        to: '/',
        label: 'Trang chủ'
    },
    {
        exact: false,
        to: '/products-list',
        label: 'Quản lý sản phẩm'
    }
];

const MenuLink = ({ exact, to, label }) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={
                ({ match }) => {
                    var active = match ? 'active' : '';
                    return (
                        <li className={active}>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    );
                }
            }
        ></Route>
    );
};

class Menu extends Component {

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu,index) => {
                return(
                    <MenuLink key={index} exact={menu.exact} to={menu.to} label={menu.label} />
                );
            });
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="/#">NTV</a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                       {this.showMenus(menus)}
                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                        </div>
                        <button type="submit" className="btn btn-default">Tìm kiếm</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/#">Đăng xuất</a></li>
                        <li className="dropdown">
                            <a href="/#" className="dropdown-toggle" data-toggle="dropdown">Nguyễn Tuấn Vũ<b className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="/#">Thông tin cá nhân</a></li>
                                <li><a href="/#">Đổi mật khẩu</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;