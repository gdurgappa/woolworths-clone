import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as api from "../../api/request";
import { GET_DYNAMIC_CONTENT_URL } from "../../api/urls";
const useStyles = makeStyles(() => ({
  dynamicBannerContainer: {
    "& .visible-xs": {
      margin: "0px",
    },
    "& .hidden-xs": {
      margin: "0px",
    },
    "& .row": {
      margin: "0px",
    },
    "& .top-banner-wrapper": {
      margin: "0px",
    },
  },
  dynamicBannerContent: {},
}));
const DynamicBanner = ({ url }: { url: string }) => {
  const [dynamicHtml, setDynamicHtml] = useState<any>();

  const classes = useStyles();

  useEffect(() => {
    //https://www.woolworths.com.au/Shop/DynamicContent2Panel?scheduleKey=/shop/browse/fruit-veg/vegetables
    //https://www.woolworths.com.au/Shop/DynamicContent2Panel?scheduleKey=/shop/search/products
    if (url) {
      api.get<HTMLElement>(GET_DYNAMIC_CONTENT_URL + url).then((res) => {
        setDynamicHtml(res);
      });
    }
  }, [url]);
  return (
    <div>
      {/* <div className={classes.dynamicBannerContent}>dynamic banner</div> */}
      <div
        className={classes.dynamicBannerContainer}
        dangerouslySetInnerHTML={{
          __html: dynamicHtml,
        }}
      ></div>
    </div>
  );
};

export default DynamicBanner;
