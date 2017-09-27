const React = require('react');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { renderToStaticMarkup } = require('react-dom/server');
const Plp = require('../../../client/scripts/plp/components').default;
const reducers = require('../../../client/scripts/plp/reducers').default;
const productsViewModel = require('../../view-models/product');
const checkCache = require('../../lib/utils/check-cache');
const { parseStatePlp } = require('../../lib/utils/parse-state');

const home = async function(req, res, next) {
	try {
		const productsQuery = await checkCache(productsViewModel);
		const state = parseStatePlp(productsQuery, req.session.basket);
		const store = createStore(reducers, state);
		const preloadedState = JSON.stringify(store.getState());
		const plp = <Provider store={store}><Plp /></Provider>;
		const html = renderToStaticMarkup(plp);
		res.render('home', { html, preloadedState });
	} catch(err) {
		return next(err);
	}
}

const getProducts = async function(req, res) {
	try {
		const amount = req.params.amount;
		const productsQuery = await productsViewModel(amount);
		res.json(productsQuery);
	} catch(err) {
		next(err);
	}
}

const getBasket = function(req, res) {
	const day = 3600000 * 24;
	req.session.cookie.expires = new Date(Date.now() + day);
	const basket = req.session.basket || { basket: [], total: 0 };
	res.json(basket);
}

const postBasket = function(req, res) {
	req.session.basket = req.body;
	req.session.save();
	res.send({ success: true });
}

module.exports = { home, getProducts, getBasket, postBasket };