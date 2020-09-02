import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Slider from "react-slick";
import ButtonWithIcon from "../../shared/Common/ButtonWithIcon";
import { carousel, Carousel } from "../../constants/firestoreData/homePageData";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../Products/Details/PeopleAlsoViewedProducts";

const useStyles = makeStyles(() => ({
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
    position: "relative",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    "& img": {
      position: "absolute",
      bottom: 0,
    },
  },
  button: {
    position: "absolute",
    right: "50%",
    bottom: "20px",
    overflow: "hidden",
  },
  slickNextPrevButton: {
    color: "#178841",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "44px",
    height: "44px",
    background: "#eee",
    opacity: 0.8,
    margin: "auto",
    border: "none",
    cursor: "pointer",
    fontFamily: "wwfoodicons",
    fontSize: "20px",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
    justifyContent: "center",
  },
  slickNextButton: {
    right: "5px",
    borderRadius: "50%",
  },
  slickPrevButton: {
    left: "15px",
    borderRadius: "50%",
  },
}));

const MainCarousel = () => {
  const classes = useStyles();
  // const [carouselItems, setCarouselItems] = useState([]);
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    nextArrow: (
      <SampleNextArrow
        classes={[classes.slickNextPrevButton, classes.slickNextButton].join(
          " "
        )}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        classes={[classes.slickNextPrevButton, classes.slickPrevButton].join(
          " "
        )}
      />
    ),
  };

  const carouselItems = carousel;
  return (
    <div className={classes.root}>
      <Slider className={classes.slider} {...settings}>
        {carouselItems.length &&
          carouselItems.map((item: Carousel, index: number) => {
            return (
              <div key={index}>
                <div
                  className={classes.sliderItem}
                  style={{ background: item.background && item.background }}
                >
                  {item.image && <img src={item.image} />}
                  <ButtonWithIcon
                    title={item.button}
                    rootDivOverrideStyle={{
                      position: "absolute",
                      left: "50%",
                      bottom: "20px",
                      overflow: "hidden",
                      zIndex: 4,
                      transform: "translateX(-50%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "3px 10px",
                      backgroundColor: "#FFFFFF",
                      color: "#3A474E",
                      border: "2px Solid #3A474E",
                      transition: "all 150ms ease-out",
                    }}
                    buttonOverrideStyle={{
                      padding: 0,
                      color: "#3A474E",
                      background: "inherit",
                    }}
                  />
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MainCarousel;
