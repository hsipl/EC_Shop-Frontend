import { PostCarousel } from "@/views/Homepage/PostCarousel";
import { ExploreCarousel } from "@/views/Homepage/ExploreCarousel";
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
        <PostCarousel />
        <h2>探索Carousell</h2>
        <ExploreCarousel />
        <h2>你的每日精選</h2>
        <DailyPicks />
        <h2>為你推薦</h2>
        <Recommend />
      </div>
    </div>
  );
}
