const handler404 = function(req, res, next) {
	res.status(404);
	res.render('404');
}

const handler500 = function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
}

module.exports = { handler404, handler500 };