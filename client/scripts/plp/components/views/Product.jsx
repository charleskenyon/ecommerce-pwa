import React from 'react';

const Product = ({ title, color, onClick }) => (
	<li>
		<p> {title} - {color} </p>
		<button type="button" onClick={onClick}>ADD TO BAG</button>
	</li> 
)

export default Product;