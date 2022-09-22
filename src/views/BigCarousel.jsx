import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const BigCarousel = () => {
  const carouselRef = React.useRef();
  const onLeftArrow = () => carouselRef.current.prev();
  const onRightArrow = () => carouselRef.current.next();

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Carousel dots={false} draggable slidesToShow={2} ref={carouselRef}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <LeftOutlined
        style={{
          fontSize: "32px",
          display: "flex",
          position: "absolute",
          top: "64px",
          left: "0",
        }}
        onClick={onLeftArrow}
      />
      <RightOutlined
        style={{
          fontSize: "32px",
          display: "flex",
          position: "absolute",
          top: "64px",
          right: "0",
        }}
        onClick={onRightArrow}
      />
    </div>
  );
};
