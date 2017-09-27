import React from 'react';
import ProductListContainer from './containers/ProductListContainer';
import SearchContainer from './containers/SearchContainer';
import BasketContainer from './containers/BasketContainer';

const Plp = () => (
	[
		<BasketContainer key="basket" />,
		<SearchContainer key="search" />,
		<ProductListContainer key="products" />
	]
);

export default Plp;