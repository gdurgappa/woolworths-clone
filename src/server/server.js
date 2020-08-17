const request = require("request");
const jsonframe = require("jsonframe-cheerio");
const cheerio = require("cheerio");
var frame = {
  companies: {
    _s: ".offer-tile-item",
    _d: [
      {
        // "data": [{}] defines a list of items
        name: ".offer-tile-header-title",
        url: {
          // defining "url" by an attribute with "attr" and "selector" in an object
          _s: ".offer-tile-header-roundel img", // is actually the same as the inline selector
          attr: "src", // the attribute name to retrieve
        },
      },
    ],
  },
};
request(
  "https://www.woolworths.com.au/Shop/DynamicContent2Panel?scheduleKey=/",
  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);

      jsonframe($);

      var companiesList = $("body").scrape(frame);
    }
  }
);
