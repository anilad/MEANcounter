var express = require("express");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.use(session({secret: 'codingdojorocks'})); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    if(!req.session.count){
        req.session.count = 0;
    }
    req.session.count++;
    var count = req.session.count;
    console.log(req.session.count);
    res.render('index', { count: count });
});

app.get('/count', function (req, res){
    req.session.count++;
    res.redirect('/');
});
app.get('/reset', function (req, res){
    req.session.destroy();
    res.redirect('/');
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})