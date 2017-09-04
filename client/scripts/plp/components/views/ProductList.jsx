import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToBag }) => {
	const hasProducts = products.length > 0;
	
	const nodes = hasProducts ? (
		products.map(product => (
			<Product key={product.id} {...product} onClick={() => addToBag(product)} />
		))
	) : (
		<p>Sorry we can't find what you are looking for</p>
	)

	return (
		<ul> {nodes} </ul>
	)
}

export default ProductList;