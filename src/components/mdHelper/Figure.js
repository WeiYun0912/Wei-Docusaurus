import React from "react";

const Figure = ({ src }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <img src={src} style={{ width: "100%" }} />
    <b style={{ textAlign: "center", marginTop: "10px" }}>
      PostCSS | 編譯輸出後的CSS
    </b>
  </div>
);

export default Figure;
