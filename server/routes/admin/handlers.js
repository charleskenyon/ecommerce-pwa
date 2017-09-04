const home = function(req, res) {
	res.render('admin', { layout: null });
}

module.exports = { home }