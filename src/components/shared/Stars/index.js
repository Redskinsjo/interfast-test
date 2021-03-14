import React from "react";
import Star1 from "../../../assets/img/star1.png";
import Star2 from "../../../assets/img/star2.png";
import Star3 from "../../../assets/img/star3.png";

export default function Stars() {
  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <img src={Star1} style={{ position: "absolute", top: 150, left: 90 }} />
      <img src={Star2} style={{ position: "absolute", top: 165, left: 120 }} />
      <img src={Star3} style={{ position: "absolute", top: 180, left: 105 }} />

      <img
        src={Star1}
        style={{ position: "absolute", bottom: 160, right: 120 }}
      />
      <img
        src={Star2}
        style={{ position: "absolute", bottom: 145, right: 90 }}
      />
      <img
        src={Star3}
        style={{ position: "absolute", bottom: 130, right: 105 }}
      />
    </div>
  );
}
