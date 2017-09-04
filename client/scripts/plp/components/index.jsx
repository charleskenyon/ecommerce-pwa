import React from 'react';
import ProductListContainer from './containers/ProductListContainer';
import SearchContainer from './containers/SearchContainer';
import BasketContainer from './containers/BasketContainer';

const Plp = () => (
	<div className="plp">
		<BasketContainer />
		<SearchContainer />
		<ProductListContainer />
	</div>
);

export default Plp;