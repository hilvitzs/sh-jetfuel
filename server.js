const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
const port = (process.env.PORT || 3000);
const express = require('express');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('App'));


app.get('/', (request, response) => response.sendFile(path.join(__dirname, './App/index.html')));

app.get('/api/v1/folders', (request, response) => {
  database('folders').select()
    .then((folders) => {
      response.status(200).json(folders);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/folders', (request, response) => {
  const folder = request.body;

  database('folders').insert(folder, 'id')
  .then(folder => {
    response.status(201).json({ id: folder[0] });
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.get('/api/v1/links/', (request, response) => {
  database('links').select()
    .then(links => {
      response.status(200).json(links);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});


app.get('*', (request, response) => response.sendFile(path.join(__dirname, './App/index.html')));

app.listen(port);

module.exports = app;
