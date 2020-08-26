import { HomePageCardProps } from "../../components/Home/AnimatedCard";

export interface Carousel {
  background: string;
  button: string;
  image?: string;
}
export const carousel: Carousel[] = [
  {
    background: `rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/carousel-cartology-table-2000x115.png") repeat scroll 0% 0px / cover padding-box border-box`,
    button: "Shop now",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-ooo-gyww-winter-cooking-all-and-vic-v3.png",
  },
  {
    background: `rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk5-covid-carousel-background.jpg") no-repeat scroll 50% 50% / cover padding-box border-box`,
    button: "Find out more",
  },
  {
    background: `rgba(0, 0, 0, 0) linear-gradient(rgb(201, 185, 218) 39%, rgb(157, 130, 188) 100%) repeat scroll 0% 0% / auto padding-box border-box`,
    button: "Shop now",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-half-price-winter-hbb-all-and-vic-v1.png",
  },
  {
    background: `rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-bg-gyww-generic-rewards-all-and-vic-v2.png") no-repeat scroll 50% 50% / cover padding-box border-box"`,
    button: "Boost now",
  },
  {
    background: `rgba(0, 0, 0, 0) url("https://cdn0.woolworths.media/content/new-homepage/wk7-carousel-bg-gyww-generic-rewards-all-and-vic-v2.png") no-repeat scroll 50% 50% / cover padding-box border-box`,
    button: "Boost now",
  },
];
export interface WelcomeTab {
  description?: string;
  link?: string;
  image: string;
  new?: boolean;
}
export const welcomeTabs: WelcomeTab[] = [
  {
    new: true,
    image:
      '<figure class="quick-access-nav-item-image" style="background: url(&quot;https://cdn0.woolworths.media/content/news-portal/newsroom-icon-ceo-updates.svg&quot;) center center / 36px 54px no-repeat;"></figure>',
    description: "COVID-19 updates",
    link:
      "https://www.woolworths.com.au/shop/discover/community/news?icmpid=sm-hp-ribbon2:covid-updates",
  },
  {
    link:
      "https://www.woolworths.com.au/shop/discover/priorityassistance?icmpid=sm-hp-ribbon3:priority-assistance",
    description: "Priority Assistance",
    image:
      '<figure class="quick-access-nav-item-image" style="background: url(&quot;https://cdn0.woolworths.media/content/new-homepage/priority-assist-icon.png&quot;) center center / 24px 32px no-repeat;"></figure>',
  },
  {
    link:
      "https://www.woolworths.com.au/shop/catalogue?icmpid=sm-hp-ribbon1:browse-catalogue",
    description: "Browse Catalogue",
    image:
      '<figure class="quick-access-nav-item-image" style="background: url(&quot;https://cdn0.woolworths.media/content/content/wk39-catalogue-generic-2020.png&quot;) -1px 0px / 71px no-repeat;"></figure>',
  },
  {
    image:
      '<figure class="quick-access-nav-item-image" style="background: url(&quot;https://cdn0.woolworths.media/content/new-homepage/icon-mobile-phone-wapple.svg&quot;) center center / 32px 32px no-repeat;"></figure>',
    description: "Ways to shop",
    link: "/shop/discover/shopping-online?icmpid=sm-hp-ribbon5:ways-to-shop",
  },
  {
    image:
      '<figure class="quick-access-nav-item-image" style="background: url(&quot;https://cdn0.woolworths.media/content/new-homepage/rewards-new-icon.png&quot;) center center / 32px 32px no-repeat;"></figure>',
    description: "Enjoy Everyday Rewards",
    link: "/shop/discover/everyday-rewards?icmpid=sm-hp-ribbon4:earn-rewards",
  },
];
export const latestFromWoolworth: HomePageCardProps[] = [
  {
    link:
      "/shop/discover/woolworths-australian-first-sourcing-policy?icmpid=sm-hp-right:other:generic:marketing:wk07",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk6-tiles-australian-first.jpg",
    title: "We pick Australian fruit & veg first",
    buttonText: "Discover more",
    description: "Read our Australian First Sourcing Policy",
  },
  {
    buttonText: "Find out more",
    description: "",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk4-banner-tile-covid-3.png",
    link:
      "/shop/discover/community/news?icmpid=sm-hp-middle:other:generic:covid19-updates:wk07",
    title: "The latest information",
  },
  {
    buttonText: "Discover more",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-banner-tiles-gyww.jpg",
    link:
      "/shop/discover/woolies-worth?icmpid=sm-hp-left:other:generic:marketing:wk07",
    description: "",
    title: "More ways to help your money go further",
  },
];
export const cooking: HomePageCardProps[] = [
  {
    buttonText: "View recipes",
    link:
      "/shop/recipes/featured-recipes/strawberry-recipes?icmpid=sm-homepage-recipe-tiles-left:berries-recipes:wk07",
    title: "Berry delicious recipes",
    description: "Discover ways to cook with deliciously sweet strawberries.",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-homepage-recipe-left.jpg",
  },
  {
    buttonText: "View recipes",
    description: "Gnocchi, lasagne and pasta bakes, oh my!",
    link:
      "/shop/recipes/popular-ingredients/pasta-recipes?icmpid=sm-homepage-recipe-tiles-right:pasta-recipes:wk07",
    title: "Pasta perfection",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-homepage-recipe-right.jpg",
  },
  {
    description: "Indulge your sweet tooth with these delicious treats.",
    link:
      "/shop/recipes/meal-types/dessert?icmpid=sm-homepage-recipe-tiles-middle:desserts-recipes:wk07",
    title: "Decadent desserts",
    buttonText: "View recipes",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-homepage-recipe-middle.jpg",
  },
];
export const shopOnline: HomePageCardProps[] = [
  {
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk16-b2b-tile.png",
    description: "Shop for your business online with Woolworths",
    buttonText: "Find out more",
    title: "Business ordering made easy!",
    link:
      "/shop/discover/shopping-online/my-business?icmpid=sm-hp-shopping-online:2:b2b",
  },
  {
    title: "Get 30 days free delivery with Delivery Unlimited",
    link:
      "/shop/discover/shopping-online/delivery-unlimited?icmpid=sm-hp-shopping-online:3:delivery-unlimited",
    buttonText: "Start free trial",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk16-fresh-delivery-top-banner-tile-delivery-unlimited.png",
    description: "T&Cs apply.",
  },
  {
    buttonText: "Find out more",
    title: "$10 off your first Pick up shop",
    image:
      "https://cdn0.woolworths.media/content/content/wk46-shopping-online-tile-pickup.jpg",
    link:
      "/shop/discover/shopping-online?icmpid=sm-hp-shopping-online:1:pickup",
    description: "Min spend $100. T&Cs apply.",
  },
];
export const moreFromWoolworth: HomePageCardProps[] = [
  {
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk47-tile-mobile.jpg",
    description: "Get a plan on a Samsung, OPPO or Apple phone",
    title: "Woolworths Mobile",
    buttonText: "Find out more",
    link:
      "https://mobile.woolworths.com.au/?icmpid=sm-hp-more-from-woolies:2:mobile",
  },
  {
    link: "/shop/discover/insurance?icmpid=sm-hp-more-from-woolies:1:insurance",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk47-tile-insurance.jpg",
    title: "Woolworths Insurance",
    description: "Protect the things you love",
    buttonText: "Find out more",
  },
  {
    buttonText: "Find out more",
    link:
      "/shop/discover/gift-cards?icmpid=sm-hp-more-from-woolies:3:gift-cards",
    description: "Gift Cards for everyone on your shopping list",
    title: "Woolworths Gift Cards",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk47-tile-gift-cards.png",
  },
];
export const exploreThisWeekSpecials: HomePageCardProps[] = [
  {
    description:
      "Connoisseur Ice Cream Sticks Pk 4, Mr Chen's Yum Cha 204-300g",
    link:
      "/shop/productgroup/120820-wk7-freezer-halfprice?icmpid=sm-hp-tile1:half-price:generic:freezer:wk07",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-offertile-halfprice-freezer-all-and-vic.png",
    headerImg:
      "https://cdn0.woolworths.media/content/new-homepage/half-price-roundel.svg",
    headerType: "halfPrice",
    title: "Freezer",
  },
  {
    title: "Drinks & Snacks",
    headerImg:
      "https://cdn0.woolworths.media/content/new-homepage/half-price-roundel.svg",
    headerType: "halfPrice",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-offertile-halfprice-drinks-and-snacks-all-and-vic.png",
    link:
      "/shop/productgroup/120820-wk7-drinks-snacks-halfprice?icmpid=sm-hp-tile2:half-price:generic:impulse:wk07",
    description: "V Energy 4x275ml, Thins Chips 175g",
  },
  {
    headerType: "freshSpecial",
    link:
      "/shop/productgroup/odd-homepage-fresh-NSW?icmpid=sm-hp-tile3:special:generic:produce:wk07",
    description: "Strawberries 250g Punnet",
    headerImg:
      "https://cdn0.woolworths.media/content/new-homepage/2019-roundel-fresh-special-200x200.png",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/offertile-special-fruit-veg-strawberries.jpg",
    title: "Fruit & Veg",
  },
  {
    title: "Easy Meals",
    image:
      "https://cdn0.woolworths.media/content/new-homepage/wk7-offertile-new-easy-meals-non-liquor-stores.png",
    headerType: "new",
    link:
      "/shop/productgroup/120820-wk7-new-easy-meals?icmpid=sm-hp-tile4:new:generic:misc:wk07",
    description: "Della Rosa Pizza 470g, Hart & Soul Mushroom Risotto 150g",
  },
];
