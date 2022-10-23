import { BigCarousel } from "@/views/BigCarousel";
import { SamllCarousel } from "@/views/SmallCarousel";
import { Recommend } from "@/views/Recommend";
import { DailyPicks } from "@/views/DailyPicks";

export default function PageA() {
  return (
    <div>
      <div>123</div>
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
