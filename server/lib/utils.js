const createPreloadedStatePlp = function(products, basket={ basket: [], total: 0 }) {
	return {
		productState: { 
			products,
			isFetching: false 
		},
		basketState: {
			...basket,
			isFetching: false
		},
		searchState: {
			query: ''
		}
	}
}

module.exports = { createPreloadedStatePlp };