const BASE_URL =
  "https://www.olx.com.br/imoveis/aluguel/apartamentos/estado-pr/regiao-de-curitiba-e-paranagua?f=p";

let urls = [];
const urlIterator = () => {
 for (let p = 1; p <= 15; p++) {
    const url = BASE_URL.concat(`&o=${p}`);
    urls.push(url)
  }
  return urls;
};

module.exports = urlIterator;
