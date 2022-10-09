import { MyCarousel } from "@/components/MyCarousel";
import { data } from "@/assets/homepageData";

import React from "react";

const contentStyle = {
  height: "250px",
  color: "#fff",
  lineHeight: "250px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
  margin: "5px",
};

export const BigCarousel = () => {
  const views = data.map((item) => (
    <div key={item.id}>
      <h3 style={contentStyle}>{item.id}</h3>
    </div>
  ));
  return <MyCarousel views={views} shownums={2} />;
};
