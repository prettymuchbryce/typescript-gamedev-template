var express = require('express');
var app = express();
var server = require('http').Server(app);
var bunyan = require('bunyan');
var logger = bunyan.createLogger({name: 'app'});
var bodyParser = require('body-parser')

app.use(express.static('./static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates/');

var PORT = 3000;
server.listen(PORT);
logger.info('Server started at port ' + PORT);