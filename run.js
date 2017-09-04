const cluster = require('cluster');
const http = require('http');
const app = require('./server');

const workers = process.env.WEB_CONCURRENCY || 1;

if (workers === 1 || !cluster.isMaster) {
	
	http.createServer(app).listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);
  });

} else {

  for (let i = 0; i < workers; i++) {
		startWorker();
	}

  cluster.on('disconnect', (worker) => {
    console.log(`CLUSTER: Worker ${worker.id} disconnected from the cluster`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`CLUSTER: Worker ${worker.id} died with exit code`);
    startWorker();
  });

}

function startWorker() {
  const worker = cluster.fork();
  console.log(`CLUSTER: Worker ${worker.id} started`);
}

// npm i spdy --save
// server.key, server.crt, server.csr

