import React from 'react';
import { connect } from 'react-redux';
import createReactClass from 'create-react-class';
import axios from 'axios';
import Total from '../views/Total';

const BasketContainer = createReactClass({

	componentDidUpdate() {
		const total = this.props.total;
		const basket = this.props.basket;
		axios.post('/setBasket', { total, basket });
	},
	
	render() {
		return <Total {...this.props} />
	}

});

const mapStateToProps = function(store) {
	return {
		total: store.basketState.total,
		basket: store.basketState.basket,
		isFetching: store.basketState.isFetching
	}
}

export default connect(mapStateToProps)(BasketContainer);