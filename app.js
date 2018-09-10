const app = require('express')();
const express = require('express')
const path = require('path');
const dynamoose = require('dynamoose')
const bodyParser= require('body-parser')
const apiRouter = require('./routes/api.router');

const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'build')));

app.all('/', (req, res)=> {
  res.sendFile(path.join(__dirname+'build/index.html'))
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(port);

module.exports = app
