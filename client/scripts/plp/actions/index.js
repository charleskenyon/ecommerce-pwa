import axios from 'axios';
import store from '../store';
import * as actionType from '../constants/action-types';

export function requestProducts() {
  return {
		type: actionType.REQUEST_PRODUCTS
	}
}

export function receiveProducts(products) {
  return {
		type: actionType.RECEIVE_PRODUCTS,
		products
	}
}

export function requestBasket() {
	return {
		type: actionType.REQUEST_BASKET
	}
}

export function receiveBasket(basket) {
	return {
		type: actionType.RECEIVE_BASKET,
		basket
	}
}

export function addToBag(product) {
  return {
		type: actionType.ADD_TO_BAG,
		product
	}
}

export function userUpdateQuery(query) {
  return {
		type: actionType.USER_UPDATE_QUERY,
		query
	}
}

export function fetchProducts(url) {
	return dispatch => {
		dispatch(requestProducts());
		return axios.get(url)
			.then(response => dispatch(receiveProducts(response.data)))
	}
}

export function fetchBasket(url) {
	return dispatch => {
		dispatch(requestBasket());
		return axios.get(url) 
			.then(response => dispatch(receiveBasket(response.data)))
	}
}
