import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Routes from './Routes';
class App extends Component {
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} exact={route.exact} path={route.path} component={route.main} />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <BrowserRouter>
                <Menu />
                <div className="container">
                    <div className="row">
                        <Switch>
                            {this.showContentMenus(Routes)}
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;