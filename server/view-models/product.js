const Product = require('../models/product');

const productsViewModel = async function(amount=1000) {
	try {
		const productsQuery = await Product.find().limit(parseInt(amount));
		
		const response = productsQuery.map(v => {
			return {
				id: v._id,
				title: v.title,
				price: v.price,
				productNumber: v.productNumber,
				image: v.mainImage,
				category: v.category,
				color: v.color,
				size: v.size,
				description: v.description
			}
		});

		return response;
	} catch (error) {
		return error;
	}
}

module.exports = productsViewModel;