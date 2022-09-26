import { Carousel } from "antd";
import React from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";

const contentStyle = {
  aspectRatio: "1/1",
  color: "#fff",
  lineHeight: "80px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
  margin: "10px",
};

export const SamllCarousel = () => {
  const ref = useRef();
  const rightArror = () => ref.current.next();
  const leftArror = () => ref.current.prev();
  return (
    <div style={{ position: "relative" }}>
      <Carousel dots={false} slidesToShow={8} ref={ref}>
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
        <div>
          <h3 style={contentStyle}>5</h3>
        </div>
        <div>
          <h3 style={contentStyle}>6</h3>
        </div>
        <div>
          <h3 style={contentStyle}>7</h3>
        </div>
        <div>
          <h3 style={contentStyle}>8</h3>
        </div>
        <div>
          <h3 style={contentStyle}>9</h3>
        </div>
        <div>
          <h3 style={contentStyle}>10</h3>
        </div>
        <div>
          <h3 style={contentStyle}>11</h3>
        </div>
        <div>
          <h3 style={contentStyle}>12</h3>
        </div>
        <div>
          <h3 style={contentStyle}>13</h3>
        </div>
        <div>
          <h3 style={contentStyle}>14</h3>
        </div>
        <div>
          <h3 style={contentStyle}>15</h3>
        </div>
        <div>
          <h3 style={contentStyle}>16</h3>
        </div>
        <div>
          <h3 style={contentStyle}>17</h3>
        </div>
        <div>
          <h3 style={contentStyle}>18</h3>
        </div>
      </Carousel>
      <LeftCircleOutlined
        style={{
          fontSize: "40px",
          position: "absolute",
          left: "-10px",
          top: "38%",
        }}
        onClick={leftArror}
      />
      <RightCircleOutlined
        style={{
          fontSize: "40px",
          position: "absolute",
          right: "-10px",
          top: "38%",
        }}
        onClick={rightArror}
      />
    </div>
  );
};
