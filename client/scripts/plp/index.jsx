import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Plp from './components';
// import { fetchProducts, fetchBasket } from './actions';

export default function() {

	ReactDOM.render(
		<Provider store={store}>
			<Plp />
		</Provider>,
		document.getElementById('plp')
	);

}