'use strict';

const express = require('express');

// Constants
const PORT = 4040;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello, DevOps-jenkins-docker\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

