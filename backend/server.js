const express = require('express')

const server = express();

const PORT = 3001;

server.get('/', async (request, response) => {
  response.send('bruh')
});

server.listen(PORT, () => {
  console.log(`
    server on nesse carai, acesse http://localhost:${PORT}
  `)
})

