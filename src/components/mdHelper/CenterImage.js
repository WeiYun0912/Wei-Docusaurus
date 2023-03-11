import React from "react";

const CenterImage = ({ src }) => (
  <div
    style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
  >
    <img src={src} width="50%" style={{ margin: "0 auto" }} />
  </div>
);

export default CenterImage;
