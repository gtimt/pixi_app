var express = require('express')
var app = express()

var server = app.listen(3000, function() {
    console.log('Example app listening on port ' + server.address().port)
})

app.use(express.static(__dirname))
app.set('view engine', 'pug')

app.get('/', function(req, res) {
    res.render('index')
})
