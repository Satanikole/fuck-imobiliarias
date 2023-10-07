const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

const PORT = 3001;
const url = 'https://www.olx.com.br/imoveis/aluguel/apartamentos/estado-pr/regiao-de-curitiba-e-paranagua';

server.get('/', async (request, response) => {
  response.send('bruh')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //await page.screenshot({path: 'test.png'});
  
  await browser.close();
});

server.listen(PORT, () => {
  console.log(`
    server on nesse carai, acesse http://localhost:${PORT}
  `)
})

