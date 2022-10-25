import { ObjectCard } from "@/components/ObjectCard";
import { MyCarousel } from "@/components/MyCarousel";
import { data } from "@/assets/homepageData";

import React from "react";

export const DailyPicks = () => {
  const views = data.map((item) => (
    <ObjectCard
      key={item.id}
      width={180}
      title={item.title}
      id={item.id}
      time={item.time}
      money={item.money}
      state={item.state}
    />
  ));

  return <MyCarousel views={views} shownums={5} />;
};
