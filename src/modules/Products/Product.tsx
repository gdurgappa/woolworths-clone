import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Product } from "./types/product";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Product = (props: Product) => {
  const classes = useStyles();
  const {
    Description,
    CupString,
    InstorePrice,
    MediumImageFile,
    UrlFriendlyName,
    Stockcode,
  } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={MediumImageFile}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Link to={`/shop/productdetails/${Stockcode}/${UrlFriendlyName}`}>
            <Typography gutterBottom variant="h5" component="h2">
              {Description}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            {InstorePrice}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {CupString}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Card
        </Button>
        <Button size="small" color="primary">
          Save to List
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
