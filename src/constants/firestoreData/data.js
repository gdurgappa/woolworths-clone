// // Explore this week’s specials
// let exploreData = [];
// $(".offers-tiles-scroller .offer-tile-item").each((i, el) => {
//   exploreData[i] = {};
//   exploreData[i]["header-img"] = $(el)
//     .find(".offer-tile-header-roundel img")
//     .attr("src");
//   exploreData[i]["header-text"] = $(el)
//     .find(".offer-tile-header-title")
//     .text()
//     .trim();
//   exploreData[i]["link"] = $(el).find(".offer-tile-image a").attr("href");
//   exploreData[i]["image"] = $(el).find(".offer-tile-image img").attr("src");
//   exploreData[i]["description"] = $(el)
//     .find(".offer-tile-item-description")
//     .text()
//     .trim();
// });
//

// // Explore this week’s specials
// let welcomeData = [];
// $(".quick-access-nav-items .quick-access-nav-item").each((i, el) => {
//   welcomeData[i] = {};
//   welcomeData[i]["link"] = $(el).find("a").attr("href");
//   welcomeData[i]["image"] = $(el).find("figure")[0].outerHTML;
//   welcomeData[i]["description"] = $(el)
//     .find(".quick-access-nav-item-text")
//     .text()
//     .trim();
// });
//

// // Check out the latest from Woolworths
// let latestData = [];
// $(
//   "section.brand-promotions-and-campaigns .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   latestData[i] = {};
//   latestData[i]["link"] = $(el).find("a").attr("href");
//   latestData[i]["description"] = $(el)
//     .find(".content-block-headline")
//     .text()
//     .trim();
// });
//

// const objectArr = [
//   {
//     headerImg:
//       "https://cdn0.woolworths.media/content/new-homepage/half-price-roundel.svg",
//     headerText: "Freezer",
//     link:
//       "/shop/productgroup/120820-wk7-freezer-halfprice?icmpid=sm-hp-tile1:half-price:generic:freezer:wk07",
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/wk7-offertile-halfprice-freezer-all-and-vic.png",
//     description:
//       "Connoisseur Ice Cream Sticks Pk 4, Mr Chen's Yum Cha 204-300g",
//   },
//   {
//     headerImg:
//       "https://cdn0.woolworths.media/content/new-homepage/half-price-roundel.svg",
//     headerText: "Drinks & Snacks",
//     link:
//       "/shop/productgroup/120820-wk7-drinks-snacks-halfprice?icmpid=sm-hp-tile2:half-price:generic:impulse:wk07",
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/wk7-offertile-halfprice-drinks-and-snacks-all-and-vic.png",
//     description: "V Energy 4x275ml, Thins Chips 175g",
//   },
//   {
//     headerImg:
//       "https://cdn0.woolworths.media/content/new-homepage/2019-roundel-fresh-special-200x200.png",
//     headerText: "Fruit & Veg",
//     link:
//       "/shop/productgroup/odd-homepage-fresh-NSW?icmpid=sm-hp-tile3:special:generic:produce:wk07",
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/offertile-special-fruit-veg-strawberries.jpg",
//     description: "Strawberries 250g Punnet",
//   },
//   {
//     headerText: "Easy Meals",
//     link:
//       "/shop/productgroup/120820-wk7-new-easy-meals?icmpid=sm-hp-tile4:new:generic:misc:wk07",
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/wk7-offertile-new-easy-meals-non-liquor-stores.png",
//     description: "Della Rosa Pizza 470g, Hart & Soul Mushroom Risotto 150g",
//   },
// ];
// //latest
// // Home cooking
// let data = [];
// $(
//   "section.hp-recipes .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   recipesData[i] = {};
//   recipesData[i]["title"] = $(el).find(".content-block-headline").text().trim();
//   recipesData[i]["description"] = $(el)
//     .find(".content-block-description")
//     .text()
//     .trim();

//   recipesData[i]["link"] = $(el).find("a").attr("href");
//   recipesData[i]["image"] = $(el).css("background-image");
// });
//

// // Shopping online
// let shoppingData = [];
// $(
//   "section.shopping-online .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   shoppingData[i] = {};
//   shoppingData[i]["link"] = $(el).find("a").attr("href");
//   shoppingData[i]["link"] = $(el).css("background-image");
//   shoppingData[i]["description"] = $(el)
//     .find(".content-block-headline")
//     .text()
//     .trim();
// });
//

// // More from Woolworths
// let moreData = [];
// $(
//   "section.more-from-woolies .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   moreData[i] = {};
//   moreData[i]["link"] = $(el).find("a").attr("href");
//   moreData[i]["link"] = $(el).css("background-image");
//   moreData[i]["description"] = $(el)
//     .find(".content-block-headline")
//     .text()
//     .trim();
// });
//

// // latest latest
// // Explore this week’s specials
// let welcomeData = [];
// $(".quick-access-nav-items .quick-access-nav-item").each((i, el) => {
//   welcomeData[i] = {};
//   welcomeData[i]["link"] = $(el).find("a").attr("href");
//   welcomeData[i]["image"] = $(el).find("figure")[0].outerHTML;
//   welcomeData[i]["description"] = $(el)
//     .find(".quick-access-nav-item-text")
//     .text()
//     .trim();
// });
//

// // Check out the latest from Woolworths
// let data = [];
// $(
//   "section.brand-promotions-and-campaigns .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   data[i] = {};
//   data[i]["title"] = $(el).find(".content-block-headline").text().trim();
//   data[i]["description"] = $(el)
//     .find(".content-block-description")
//     .text()
//     .trim();

//   data[i]["link"] = $(el).find("a").attr("href");
//   data[i]["image"] = $(el).css("background-image");
// });
//

// // Home cooking
// let recipesData = [];
// $(
//   "section.hp-recipes .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   recipesData[i] = {};
//   recipesData[i]["link"] = $(el).find("a").attr("href");
//   recipesData[i]["link"] = $(el).css("background-image");
//   recipesData[i]["description"] = $(el)
//     .find(".content-block-headline")
//     .text()
//     .trim();
// });
//

// // Shopping online
// let data = [];
// $(
//   "section.shopping-online .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   data[i] = {};
//   data[i]["title"] = $(el).find(".content-block-headline").text().trim();
//   data[i]["description"] = $(el)
//     .find(".content-block-description")
//     .text()
//     .trim();

//   data[i]["link"] = $(el).find("a").attr("href");
//   data[i]["image"] = $(el).css("background-image");
// });
//

// // More from Woolworths
// let data = [];
// $(
//   "section.more-from-woolies .content-blocks-container.sqaures .content-block.square"
// ).each((i, el) => {
//   data[i] = {};
//   data[i]["title"] = $(el).find(".content-block-headline").text().trim();
//   data[i]["description"] = $(el)
//     .find(".content-block-description")
//     .text()
//     .trim();

//   data[i]["link"] = $(el).find("a").attr("href");
//   data[i]["image"] = $(el).css("background-image");
// });
//

// //carousal
// const slides = ["cs1", "cs2", "cs3", "cs4", "cs5"];

// let slideData = [];

// slides.forEach((slide, index) => {
//   slideData[index] = {};
//   const slideEl = $("#" + slide);
//   slideData[index]["image"] = $(slideEl)
//     .find(".hp-slide-image img")
//     .attr("src");
//   slideData[index]["background"] = $(slideEl)
//     .find(".hp-slide-backgrounds figure")
//     .css("background");
//   slideData[index]["button"] = $(slideEl)
//     .find(".button.carousel-cta.secondary-button")
//     .text()
//     .trim();
// });
//
// const res = [
//   {
//     background:
//       'rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-bg-gyww-generic-rewards-all-and-vic-v2.png") no-repeat scroll 50% 50% / cover padding-box border-box',
//     button: "Boost now",
//   },
//   {
//     background:
//       'rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk5-covid-carousel-background.jpg") no-repeat scroll 50% 50% / cover padding-box border-box',
//     button: "Find out more",
//   },
//   {
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-half-price-gyww-all-and-vic-v2.png",
//     background:
//       "rgba(0, 0, 0, 0) radial-gradient(circle, rgb(179, 217, 108) 39%, rgb(87, 127, 41) 100%) repeat scroll 0% 0% / auto padding-box border-box",
//     button: "Shop now",
//   },
//   {
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-ooo-gyww-winter-cooking-all-and-vic-v3.png",
//     background:
//       'rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/carousel-cartology-table-2000x115.png") repeat scroll 0% 0px / cover padding-box border-box',
//     button: "Shop now",
//   },
//   {
//     image:
//       "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-half-price-winter-hbb-all-and-vic-v1.png",
//     background:
//       "rgba(0, 0, 0, 0) linear-gradient(rgb(201, 185, 218) 39%, rgb(157, 130, 188) 100%) repeat scroll 0% 0% / auto padding-box border-box",
//     button: "Shop now",
//   },
// ];

// componentDidMount() {
//   const objectArr = [
//     {
//       background:
//         'rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-bg-gyww-generic-rewards-all-and-vic-v2.png") no-repeat scroll 50% 50% / cover padding-box border-box',
//       button: "Boost now",
//     },
//     {
//       background:
//         'rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk5-covid-carousel-background.jpg") no-repeat scroll 50% 50% / cover padding-box border-box',
//       button: "Find out more",
//     },
//     {
//       image:
//         "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-half-price-gyww-all-and-vic-v2.png",
//       background:
//         "rgba(0, 0, 0, 0) radial-gradient(circle, rgb(179, 217, 108) 39%, rgb(87, 127, 41) 100%) repeat scroll 0% 0% / auto padding-box border-box",
//       button: "Shop now",
//     },
//     {
//       image:
//         "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-ooo-gyww-winter-cooking-all-and-vic-v3.png",
//       background:
//         'rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/carousel-cartology-table-2000x115.png") repeat scroll 0% 0px / cover padding-box border-box',
//       button: "Shop now",
//     },
//     {
//       image:
//         "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-half-price-winter-hbb-all-and-vic-v1.png",
//       background:
//         "rgba(0, 0, 0, 0) linear-gradient(rgb(201, 185, 218) 39%, rgb(157, 130, 188) 100%) repeat scroll 0% 0% / auto padding-box border-box",
//       button: "Shop now",
//     },
//   ];
//   objectArr.forEach((object) => {
//     db.collection("carousel")
//       .add(object)
//       .then(function (docRef) {
//
//       });
//   });
// }
