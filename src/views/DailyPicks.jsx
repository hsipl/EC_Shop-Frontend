import { ObjectCard } from "../components/ObjectCard";
import { data } from "../assets/data";

import { Carousel } from "antd";
import React from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";

export const DailyPicks = () => {
  const ref = useRef();
  const rightArror = () => ref.current.next();
  const leftArror = () => ref.current.prev();
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Carousel dots={false} slidesToShow={5} ref={ref} style={{}}>
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
      </Carousel>
      <RightCircleOutlined
        style={{
          fontSize: "32px",
          position: "absolute",
          right: "-10px",
          top: "150px",
        }}
        onClick={rightArror}
      />
      <LeftCircleOutlined
        style={{
          fontSize: "32px",
          position: "absolute",
          left: "-10px",
          top: "150px",
        }}
        onClick={leftArror}
      />
    </div>
  );
};
