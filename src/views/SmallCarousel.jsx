import { MyCarousel } from "@/components/MyCarousel";
import { data } from "@/assets/homepageData";

import React from "react";

const contentStyle = {
  height: "110px",
  color: "#fff",
  lineHeight: "110px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "80px",
  margin: "5px",
};

export const SamllCarousel = () => {
  const views = data.map((item) => (
    <div key={item.id}>
      <h3 style={contentStyle}>{item.id}</h3>
    </div>
  ));
  return <MyCarousel views={views} shownums={8} />;
};
