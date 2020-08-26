import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchProducts } from "../../../api/request";
import {
  ProductType,
  FetchProductsReqBody,
  ProductsListType,
} from "../../../types/product";
import Product from "../Product";
import { GET_PRODUCTS_URL } from "../../../api/urls";
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

export interface NextPrevArrowProps {
  className?: string;
  classes?: string;
  style?: string;
  nextIconClassname?: string;
  onClick?: () => void;
}
export function SampleNextArrow(props: NextPrevArrowProps) {
  const { classes, onClick } = props;

  return (
    <div className={classes || "slicknext"} onClick={onClick}>
      <i className={"nextButton"}></i>
    </div>
  );
}

export function SamplePrevArrow(props: NextPrevArrowProps) {
  const { classes, onClick } = props;
  return (
    <div className={classes || "slickprev"} onClick={onClick}>
      <i className={"prevButton"}></i>
    </div>
  );
}

interface PeopleAlsoViewedProductsProps {
  categoryId: string;
  categoryName: string;
}

const PeopleAlsoViewedProducts = ({
  categoryId,
  categoryName,
}: PeopleAlsoViewedProductsProps) => {
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const classes = useStyles();
  const getAlsoViewedItemsProductList = () => {
    const body: FetchProductsReqBody = {
      categoryId: categoryId,
      pageNumber: 1,
      pageSize: 10,
      sortType: "TraderRelevance",
      url: `/shop/browse/${categoryId}`,
      location: `/shop/browse/${categoryId}`,
      formatObject: `{"name":"${categoryName}"}`,
      isSpecial: false,
      isBundle: false,
      isMobile: false,
    };
    fetchProducts<FetchProductsReqBody>(GET_PRODUCTS_URL, body).then((res) => {
      setProductsList(res.products);
    });
  };
  useEffect(() => {
    getAlsoViewedItemsProductList();
  }, []);

  const getProductsCarousels = () => {
    let i = -1;
    const setOne = (
      <div className={classes.carouselContainer}>
        {[...Array(5)].map(() => {
          i = i + 1;
          return (
            <Product key={productsList[i].Stockcode} {...productsList[i]} />
          );
        })}
      </div>
    );
    const setTwo = (
      <div className={classes.carouselContainer}>
        {[...Array(5)].map(() => {
          i = i + 1;
          return (
            <Product key={productsList[i].Stockcode} {...productsList[i]} />
          );
        })}
      </div>
    );
    return [setOne, setTwo];
  };
  console.log("productsList", productsList);
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
