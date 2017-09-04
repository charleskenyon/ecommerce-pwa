import React from 'react';
import { Debounce } from 'react-throttle';

const Search = ({ userUpdateQuery }) => (
	<Debounce time="300" handler="onChange">
		<input type="text" name="search" placeholder="Search.." onChange={(e) => userUpdateQuery(e.target.value)} />
	</Debounce>
)

export default Search;