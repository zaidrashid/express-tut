var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', (req, res) => {
    res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`recieved your request of ${JSON.stringify(req.body)}`);
});

app.listen(3000);