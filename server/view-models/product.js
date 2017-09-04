const memoryCache = require('memory-cache');
const Product = require('../models/product');

const productsViewModel = async function(amount=100) {
	try {
		const key = `__MONGO_PRODUCTS__${amount}`;
		const cachedData = memoryCache.get(key);
		if (cachedData) return JSON.parse(cachedData);
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
				size: v.size
			}
		});

		memoryCache.put(key, JSON.stringify(response), parseInt(1000 * 60));
		return response;
	} catch (error) {
		return error;
	}
}

module.exports = productsViewModel;