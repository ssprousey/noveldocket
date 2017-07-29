const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const booksCtrl = require('./server/booksCtrl');

const connectionString = "postgres://sydneysprouse@localhost/novel_docket";

massive( connectionString ).then(dbInstance => {
  app.set('db', dbInstance);
});

const app = module.exports = express();

app.use( bodyParser.json() );
app.use( cors() );
app.use(express.static('public'))

// app.post('/books', function(req, res) {
//   console.log('req.body', req.body)
//   res.send('it worked')
// })

app.post('/books', booksCtrl.saveBook);


var port = 3000;
app.listen(port, function() {
  console.log('listening on port:', port)
});
