const puppeteer = require('puppeteer');
const {url} = require('./url');

const puppeteer = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  await browser.close();
};

module.exports = puppeteer;
