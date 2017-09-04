import { ADD_TO_BAG, REQUEST_BASKET, RECEIVE_BASKET } from '../constants/action-types';
import { findIndexOf } from '../../utils';

const initialProductState = {
	isFetching: false,
	basket: [],
	total: 0
}

const basketReducer = function(state = initialProductState, action) {

	switch (action.type) {

		case REQUEST_BASKET:
			return Object.assign({}, state, { isFetching: true });

		case RECEIVE_BASKET:
			return Object.assign({}, state, action.basket, { isFetching: false });


		case ADD_TO_BAG: 
			const newState = Object.assign({}, state);
			const product = Object.assign({}, action.product);
			newState.total += parseInt(product.price);

			if (newState.basket.filter(product => product.title === action.product.title).length != 1) {
				product.quantity = 1;
				newState.basket.push(product);
			} else {
				const productIndex = findIndexOf(newState.basket, 'title', product.title);
				newState.basket[productIndex].quantity += 1;
			}

			console.log(newState)
			return newState;
	}

	return state;
}

export default basketReducer;