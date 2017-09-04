const mongoose = require('mongoose');
const uri = require('./credentials').mongo.uri;

const opts = {
	server: {
		socketOptions: { 
			keepAlive: 1 
		},
		auto_reconnect:true
	}
}

mongoose.Promise = global.Promise;
module.exports = mongoose.connect(uri, opts);