import React, { useState, useEffect } from "react";

const NutritionalInformation = ({ nutritionalInformation }: any) => {
  return (
    nutritionalInformation &&
    nutritionalInformation.length && (
      <>
        <table>
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
        <p>Further nutritional information may be displayed on back of pack.</p>
      </>
    )
  );
};

export default NutritionalInformation;
