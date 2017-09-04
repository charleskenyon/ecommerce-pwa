const curry = function(fn) {
  const arity = fn.length;
  return (function resolver() {
    const memory = Array.prototype.slice.call(arguments);
    return function() {
      let local = memory.slice(), next;
      Array.prototype.push.apply(local, arguments);
      next = local.length >= arity ? fn : resolver;
      return next.apply( null, local );
    };
  }());
}

const searchText = curry(function(query, product) {
		const vals = query.trim().replace(/ +/g, ' ').toLowerCase().split(' ');
		const text = product.title.toLowerCase();
		let matchesQuery = true;
		vals.forEach(v => matchesQuery = (!matchesQuery) ? false : ~text.indexOf(v));
		return matchesQuery;
});

const findIndexOf = function(array, attr, value) {
	for (let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

export { curry, searchText, findIndexOf };