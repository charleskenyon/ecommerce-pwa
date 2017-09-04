const logWorkerRequests = function(req, res, next) {
  const cluster = require('cluster');
  if (cluster.isWorker) {
    console.log('Worker %d received request', cluster.worker.id);
  }
  next();
}

const setDevelopmentLocals = function(req, res, next) {
  res.locals.isDevelopment = true;
  next();
};

module.exports = { logWorkerRequests, setDevelopmentLocals };