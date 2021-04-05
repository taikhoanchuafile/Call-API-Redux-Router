import React from 'react';
import Home from './Components/Home';
import ProductsContainer from './Containers/ProductsContainer';
import NotFound from './Components/NotFound';
import ChangeProductContainer from './Containers/ChangeProductContainer';

const routes = [
    {
        exact : true,
        path : '/',
        main : () => <Home />
    },
    {
        exact : false,
        path : '/products-list',
        main : () => <ProductsContainer />
    },
    {
        exact : false,
        path : '/products/add',
        main : ({history}) => <ChangeProductContainer history={history} />
    },
    {
        exact : false,
        path : '/products/:id/edit',
        main : ({match,history}) => <ChangeProductContainer match={match} history={history} />
    },
    {
        exact : false,
        path : '',
        main : () => <NotFound />
    }
];

export default routes;
