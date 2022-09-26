import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
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
  const carouselRef = React.useRef(); //1.宣告一個ref物件
  const onLeftArrow = () => carouselRef.current.prev(); //3.current使用方法
  const onRightArrow = () => carouselRef.current.next();

  return (
    <div style={{ position: "relative" }}>
      <Carousel dots={false} draggable slidesToShow={2} ref={carouselRef}>
        {/*2.將ref物件指向Carousel*/}
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
      <LeftCircleOutlined
        style={{
          fontSize: "50px",
          position: "absolute",
          top: "100px",
          left: "-15px",
        }}
        onClick={onLeftArrow}
      />
      <RightCircleOutlined
        style={{
          fontSize: "50px",
          position: "absolute",
          top: "100px",
          right: "-15px",
        }}
        onClick={onRightArrow}
      />
    </div>
  );
};
