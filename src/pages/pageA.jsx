import { BigCarousel } from "@/views/Homepage/BigCarousel";
import { SamllCarousel } from "@/views/Homepage/SmallCarousel";
import { Recommend } from "@/views/Homepage/Recommend";
import { DailyPicks } from "@/views/Homepage/DailyPicks";

import React from "react";

export default function PageA() {
  return (
    <div>
      <div
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <BigCarousel />
        <h2>探索Carousell</h2>
        <SamllCarousel />
        <h2>你的每日精選</h2>
        <DailyPicks />
        <h2>為你推薦</h2>
        <Recommend />
      </div>
    </div>
  );
}
