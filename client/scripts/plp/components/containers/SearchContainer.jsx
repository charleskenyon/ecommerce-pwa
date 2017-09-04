import React from 'react';
import { connect } from 'react-redux';
import Search from '../views/Search';
import { userUpdateQuery } from '../../actions';

const mapStateToProps = function(store) {
	return {
		query: store.searchState.query
	}
}

export default connect(
	mapStateToProps,
	{ userUpdateQuery }
)(Search);