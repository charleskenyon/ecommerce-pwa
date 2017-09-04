const cookieParser = require('cookie-parser');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const exphbs = require('express-handlebars');
const path = require('path');

const MongoStore = connectMongo(session);

const handlebarsConfig = {
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.resolve(__dirname, '../views/layouts')
}

module.exports = function(app) {
	app.engine('.hbs', exphbs(handlebarsConfig));
	app.set('views', path.resolve(__dirname, '../views'));
	app.set('view engine', '.hbs');
	app.set('port', process.env.PORT || 3000);
	app.disable('x-powered-by');
}