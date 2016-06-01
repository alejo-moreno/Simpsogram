var express = require('express');
var request = require('superagent');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, +Date.now() + '.' + ext(file.originalname))
    }
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('index', { title: 'Platzigram' });
});

app.get('/signup', function (req, res) {
    res.render('index', { title: 'Platzigram- Signup' });
});

app.get('/signin', function (req, res) {
    res.render('index', { title: 'Platzigram- Signin' });
});

app.get('/api/characters', function (req, res) {

    request
        .get('http://api.tvmaze.com/shows/83/cast')
        .end(function (err, result) {
            var result = JSON.parse(result.text);
            var characters = result.map(data => {
                data.character.likes = 0;
                data.character.createdAt = new Date().setDate(new Date().getDate() - 10);
                return data.character;
            })
            res.json(characters);
        });
});

app.post('/api/pictures', function (req, res) {
    upload(req, res, function (err) {
        if (err) return res.send(500, "Error uploading");
        res.send(500, "file uploaded");
    })
})

app.listen(3000, function (err) {
    if (err) return console.log('error'), process.exit(1);
    console.log("Listening on 3000");
})