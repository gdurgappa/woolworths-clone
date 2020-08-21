import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Slider from "react-slick";

import * as api from "../../api/request";
import { db } from "../../App";
import ButtonWithIcon from "../../components/Common/ButtonWithIcon";
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MainCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const items: any = [];
    db.collection("carousel")
      .get()
      .then(({ docs }) => {
        docs.forEach((doc) => {
          items.push(doc.data());
        });
        setCarouselItems(items);
      });
  }, []);
  console.log("carouselItems", carouselItems);
  return (
    <div className={classes.root}>
      <Slider className={classes.slider} {...settings}>
        {carouselItems.length &&
          carouselItems.map((item: any, index: number) => {
            return (
              <div
                key={index}
                // style={{ background: item.background && item.background }}
              >
                <div
                  className={classes.sliderItem}
                  style={{ background: item.background && item.background }}
                >
                  {item.image && <img src={item.image} />}
                  <ButtonWithIcon />
                  {item.background && item.background}
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MainCarousel;
