import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";
import PropTypes from "prop-types";
import "./MyCarousel.css";

export const MyCarousel = (props) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <LeftCircleOutlined {...props} />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <RightCircleOutlined {...props} />
  );
  return (
    <div>
      <div>
        <Carousel
          arrows
          nextArrow={<SlickArrowRight />}
          prevArrow={<SlickArrowLeft />}
          dots={false}
          draggable // 拖曳
          slidesToShow={props.shownums}
        >
          {/*2.將ref物件指向Carousel*/}
          {props.views}
        </Carousel>
      </div>
    </div>
  );
};
