const express = require('express');
let app = new express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(`__dirname/public`));

var PORT = 8080;
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});

app.get('/', (req, res) => {
  res.send('hello from main page');
});

app.get('*', (req, res) => {
  res.status(404).send();
});
