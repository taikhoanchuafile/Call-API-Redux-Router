import { combineReducers } from 'redux';
import Products from './Products';
import ItemEditing from './ItemEditing';

var appReducers = combineReducers({
    Products,
    ItemEditing
});

export default appReducers;