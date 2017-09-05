const memoryCache = require('memory-cache');

const checkCache = async function(cb) {
	try {
		const key = `__MONGO_QUERY__${cb.name}`;
		const cachedData = memoryCache.get(key);
		if (cachedData) return JSON.parse(cachedData);
		const queryLimit = arguments[1];
		const data = await cb(queryLimit);
		memoryCache.put(key, JSON.stringify(data), 1000 * 60);
		return data;
	} catch (error) {
		return error;
	}
}

module.exports = checkCache;