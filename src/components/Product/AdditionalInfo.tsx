import React, { useState, useEffect } from "react";

const AdditionalInfo = ({ title, description }: any) => {
  return description ? (
    <>
      <h1>{title}</h1>
      <div>{description}</div>
    </>
  ) : null;
};

export default AdditionalInfo;
