import React, { useState, useEffect } from "react";
import Product from "../Product";
import Pagination from "@material-ui/lab/Pagination";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
  },
  slider: {
    width: "100%",
    maxWidth: "100%",
  },
  sliderItem: {
    height: "400px",
  },
}));

const PeopleAlsoViewedProducts = ({ categoryId }: any) => {
  const [productsList, setProductsList] = useState<any>([]);
  const classes = useStyles();
  const getAlsoViewedItemsProductList = () => {
    const body = JSON.stringify({
      categoryId: categoryId,
      pageNumber: 1,
      pageSize: 10,
      sortType: "TraderRelevance",
      url: `/shop/browse/${categoryId}`,
      location: `/shop/browse/${categoryId}`,
      formatObject: '{"name":"Organic Fruit"}',
      isSpecial: false,
      isBundle: false,
      isMobile: false,
      filters: null,
    });
    fetch("https://www.woolworths.com.au/apis/ui/browse/category", {
      method: "post",

      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((res: any) => res.json())
      .then((res: any) => {
        setProductsList(res.Bundles);
      });
  };
  const getAlsoBroughtItemsProductList = () => {};
  useEffect(() => {
    getAlsoViewedItemsProductList();
  }, []);

  const getProductsCarousels = () => {
    let i = 0;
    const setOne = (
      <div>
        {[...Array(4)].map((_, ind) => (
          <Product
            key={productsList[i].Products[0].Stockcode}
            {...productsList[i].Products[0]}
          />
        ))}
      </div>
    );
    const setTwo = (
      <div>
        {[...Array(4)].map((_, ind) => (
          <Product
            key={productsList[i].Products[0].Stockcode}
            {...productsList[i].Products[0]}
          />
        ))}
      </div>
    );
    return [setOne, setTwo];
  };
  return (
    <div>
      <>
        {/* xxxx use redux to display h1 - use category.Description  */}
        <h1>'People Who Viewed This Item Also Viewed '</h1>
        <div className={classes.root}>
          {productsList.length && (
            <Slider className={classes.slider} {...settings}>
              {getProductsCarousels()[0]}
              {getProductsCarousels()[1]}
            </Slider>
          )}
        </div>
      </>
    </div>
  );
};

export default PeopleAlsoViewedProducts;
