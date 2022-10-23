import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";

import "./MyCarousel.css";

const contentStyle = {
  height: "250px",
  color: "#fff",
  lineHeight: "250px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
  margin: "5px",
};

export const MyCarousel = (props) => {
  const carouselRef = React.useRef(); //1.宣告一個ref物件

  return (
    <div>
      <div>
        <Carousel
          arrows
          nextArrow={<RightCircleOutlined />}
          prevArrow={<LeftCircleOutlined />}
          dots={false}
          draggable
          slidesToShow={props.shownums}
        >
          {/*2.將ref物件指向Carousel*/}
          {props.views}
        </Carousel>
      </div>
    </div>
  );
};