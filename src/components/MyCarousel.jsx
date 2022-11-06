import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";
import PropTypes from "prop-types";
import "./MyCarousel.css";

export const MyCarousel = (props) => {
  const SlickArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
      <LeftCircleOutlined
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <LeftCircleOutlined {...props} />
  // );
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
          infinite={false}
          //draggable // 拖曳
          slidesToShow={props.shownums}
          slidesToScroll={props.scroll}
        >
          {props.views}
        </Carousel>
      </div>
    </div>
  );
};

MyCarousel.propTypes = {
  shownums: PropTypes.number,
  views: PropTypes.array,
};
