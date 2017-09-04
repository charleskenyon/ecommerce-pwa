import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/ProductList';
import { addToBag } from '../../actions';
import { searchText } from '../../../utils';

const mapStateToProps = function(store) {
	const query = store.searchState.query;
	const products = store.productState.products;
	const filteredProducts = query != '' ? products.filter(searchText(query)) : products;

	return {
		products: filteredProducts
	}
}

export default connect(
	mapStateToProps,
	{ addToBag }
)(ProductList);

// If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.