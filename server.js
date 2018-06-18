var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/tasks_controller.js');
app.use('/', routes);


app.listen(port);