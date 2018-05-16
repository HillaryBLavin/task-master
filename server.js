var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    exphbs = require('express-handlebars');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var port = 3000;
app.listen(port);