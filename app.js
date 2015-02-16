var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.engine('html', require('ejs').renderFile)


app.get('/', function(req, res) {
    res.render("index.html")
});
 
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
