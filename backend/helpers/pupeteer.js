const puppeteer = require('puppeteer');
const urlIterator = require('./url');

const puppeteerHandler = async () => {
  const urls =  urlIterator();
  const browser = await puppeteer.launch();

  for (const url of urls) {
    const page = await browser.newPage();
    await page.goto(url);
    console.log(url);
    await page.close();
  }
  
  await browser.close();
};

module.exports = puppeteerHandler;
