import React, { useState, useEffect } from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  headingText: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  paragraphText: {
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  table: {
    border: "1px solid #dedfdc",
    width: "100%",
    marginBottom: "20px",
    "& td": {
      borderLeft: "1px solid #dedfdc",
      borderRight: "1px solid #dedfdc",
      textAlign: "center",
      padding: "5px 10px",
      fontFamily: "Helvetica,Arial,sans-serif",
    },
    "& th": {
      borderLeft: "1px solid #dedfdc",
      borderRight: "1px solid #dedfdc",
      borderBottom: "1px solid #dedfdc",
      textAlign: "center",
      padding: "15px 10px",
      fontWeight: 400,
    },
    "& tr:nth-child(2n)": { background: "#fff" },
    "& tr:nth-child(odd)": { background: "#f8f8f8" },
  },
}));

const NutritionalInformation = ({ nutritionalInformation }: any) => {
  const classes = useStyles();
  return nutritionalInformation && nutritionalInformation.length ? (
    <>
      <h3 className={classes.headingText}>Nutritional Information</h3>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Nutrition</th>
            <th>Avg Qty Per 100g</th>
            <th>Avg Qty Per Serving</th>
          </tr>
        </thead>
        <tbody>
          {nutritionalInformation.map((info: any) => (
            <tr key={info.Name}>
              <td>{info.Name}</td>
              <td>{info.Values["Avg Qty Per 100g"]}</td>
              <td>{info.Values["Avg Qty Per Serving"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={classes.paragraphText}>
        Further nutritional information may be displayed on back of pack.
      </p>
    </>
  ) : (
    <></>
  );
};

export default NutritionalInformation;
