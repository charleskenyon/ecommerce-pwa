import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../constants/action-types';

const initialProductState = {
	isFetching: false,
	products: []
}

const productReducer = function(state = initialProductState, action) {

	switch (action.type) {
		
		case REQUEST_PRODUCTS: 
			return Object.assign({}, state, { isFetching: true });

		case RECEIVE_PRODUCTS: 
			return Object.assign({}, state, { products: action.products, isFetching: false });
	}
 
	return state;
}

export default productReducer;