let cheerio = require("cheerio");
let jsonframe = require("jsonframe-cheerio");
let html = cheerio.load(
  "https://www.woolworths.com.au/Shop/DynamicContent2Panel?scheduleKey=/"
);
jsonframe(html);
var frame = {
  companies: {
    selector: ".offer-tile-item",
    data: [
      {
        // "data": [{}] defines a list of items
        name: ".offer-tile-header-title",
        url: {
          // defining "url" by an attribute with "attr" and "selector" in an object
          selector: ".offer-tile-header-roundel img", // is actually the same as the inline selector
          attr: "src", // the attribute name to retrieve
        },
      },
    ],
  },
};
var companiesList = html().scrape(frame);
console.log(companiesList); // Output the data in the terminal
