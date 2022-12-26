import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";
import PropTypes from "prop-types";
import "@/components/MyCarousel.css";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftCircleOutlined style={{ color: "gray", fontSize: "30px",backgroundColor:"white",borderRadius:"50px",opacity:"0.7", }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightCircleOutlined style={{ color: "gray", fontSize: "30px",backgroundColor:"white",borderRadius:"50px",opacity:"0.7",}} />
    </div>
  );
};


export const MyCarousel = (props) => {
  return (
    <div>
      <div>
        <Carousel
          arrows
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
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
