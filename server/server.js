const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.json());
app.use(cors());

// API
app.get('/getAllGames', function(req, res) {
	axios.get('https://www.freetogame.com/api/games')
    .then(response => {
        console.log(response)
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });
});

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

module.exports = app;