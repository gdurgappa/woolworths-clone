import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../Product";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // nextArrow: <SampleNextArrow className="slick-next" />,
  // prevArrow: <SamplePrevArrow className="slick-prev" />,
};
const useStyles = makeStyles(() => ({
  root: {
    alignItems: "start",
    display: "flex",
    marginBottom: "50px",
    flexDirection: "column",
    width: "1140px",
    margin: "0px auto",
  },
  slider: {
    width: "100%",
    maxWidth: "100%",
  },
  sliderItem: {
    height: "400px",
  },
  carouselContainer: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: "28px",
    lineHeight: "32px",
    color: "#3a474e",
    fontWeight: 400,
    marginBottom: "20px",
  },
}));
export function SampleNextArrow(props: any) {
  const { className, classes, style, onClick } = props;

  return (
    <div className={classes || "slicknext"} onClick={onClick}>
      <i className={"nextButton"}></i>
    </div>
  );
}

export function SamplePrevArrow(props: any) {
  const { className, classes, nextIconClassname, style, onClick } = props;
  return (
    <div
      className={classes || "slickprev"}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <i className={"prevButton"}></i>
    </div>
  );
}
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
    let i = -1;
    const setOne = (
      <div className={classes.carouselContainer}>
        {[...Array(5)].map((_, ind) => {
          i = i + 1;
          return (
            <Product
              key={productsList[i].Products[0].Stockcode}
              {...productsList[i].Products[0]}
            />
          );
        })}
      </div>
    );
    const setTwo = (
      <div className={classes.carouselContainer}>
        {[...Array(5)].map((_, ind) => {
          i = i + 1;
          return (
            <Product
              key={productsList[i].Products[0].Stockcode}
              {...productsList[i].Products[0]}
            />
          );
        })}
      </div>
    );
    return [setOne, setTwo];
  };
  return (
    <div>
      <>
        {/* xxxx use redux to display h1 - use category.Description  */}
        <div className={classes.root}>
          <h2 className={classes.heading}>
            People Who Viewed This Item Also Viewed
          </h2>
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
