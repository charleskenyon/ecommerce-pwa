import { USER_UPDATE_QUERY } from '../constants/action-types';

const initialSearchState = {
	query: ''
}

const searchReducer = function(state = initialSearchState, action) {

	switch (action.type) {
		
		case USER_UPDATE_QUERY:
			return { ...state, query: action.query };
	}

	return state;
}

export default searchReducer;