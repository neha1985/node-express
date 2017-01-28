const express = require('express'),
	  sequelize = require('sequelize'),
	  path = require('path'),
	  exphbs  = require('express-handlebars');

var app = express();
app.use('/',require('./server/routes/routes'));

app.use(express.static(path.join(__dirname, './node_modules')));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'server/views'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
