const http = require("http");
const fs = require("fs");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate.js");

let tempOverview = fs.readFileSync("./templates/overview.html", "utf-8");

let tempProduct = fs.readFileSync("./templates/product.html", "utf-8");

let tempCard = fs.readFileSync("./templates/card.html", "utf-8");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  switch (pathname) {
    case "/overview":
      const cards = dataObj.map((el) => replaceTemplate(tempCard, el));

      tempOverview = tempOverview.replace("{%PRODUCT_CARDS%}", cards);

      return res.end(tempOverview);

    case "/product":
      const product = dataObj[query.id];

      const output = replaceTemplate(tempProduct, product);

      return res.end(output);

    default:
      return res.end("<h1>ARANAN SAYFA BULUNAMADI</h1>");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Server 4000 porta gelen istekleri dinlemeye başladı");
});
