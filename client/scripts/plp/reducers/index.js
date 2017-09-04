import { combineReducers } from 'redux';
import productReducer from './product-reducer';
import searchReducer from './search-reducer';
import basketReducer from './basket-reducer';

var reducers = combineReducers({
    productState: productReducer,
    searchState: searchReducer,
    basketState: basketReducer
});

export default reducers;