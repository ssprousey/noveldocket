const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');


const app = module.exports = express();

app.use( bodyParser.json() );
app.use( cors() );

var port = 3000;
app.listen(port, function() {
  console.log('listening on port:', port)
});
