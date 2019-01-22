var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log('ready to listen')

app.listen(8080)

