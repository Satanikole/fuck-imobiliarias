const express = require('express')
const puppeteerHandler = require('./helpers/pupeteer')

const server = express();

const PORT = 3001;

server.get('/', async (request, response) => {
  response.send('bruh')
  await puppeteerHandler();
});

server.listen(PORT, () => {
  console.log(`
    server on nesse carai, acesse http://localhost:${PORT}
  `)
})

