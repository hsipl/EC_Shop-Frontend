import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";
import PropTypes from 'prop-types';

import "./MyCarousel.css";


export const MyCarousel = (props) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <LeftCircleOutlined
      {...props}
    />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <RightCircleOutlined
      {...props}
    />
  );
  return (
    <div>
      <div>
        <Carousel
          arrows
          nextArrow={<SlickArrowRight />}
          prevArrow={<SlickArrowLeft />}
          dots={false}
          draggable
          slidesToShow={props.shownums}
        >
          {props.views}
        </Carousel>
      </div>
    </div>
  );
};

MyCarousel.propTypes={
  shownums: PropTypes.number,
  views: PropTypes.array
}