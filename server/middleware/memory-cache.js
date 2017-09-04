const memoryCache = require('memory-cache');

module.exports = function(duration) {
  return (req, res, next) => {
    const key = '__EXPRESS__' + req.originalUrl || req.url;
    const cachedBody = memoryCache.get(key);

    if (cachedBody) {
    	console.log('cached');
      res.send(cachedBody);
    } else {
    	console.log('not cached');
      res.sendResponse = res.send;
      res.send = body => {
        memoryCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      }
      next();
    }

  }
}