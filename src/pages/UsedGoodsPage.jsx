import { Post, SellerContact, UsedGoodsInfo } from "@/views/UsedGoodsPage";
import { Breadcrumb, Carousel, Divider } from "antd";
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function UsedGoodsPage() {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="">票券</Breadcrumb.Item>
        <Breadcrumb.Item href="">旅遊票券</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
      </Carousel>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid", width: "75%" }}>
          <UsedGoodsInfo />
          <Divider />
          <Post />
        </div>
        <div style={{ border: "1px solid", width: "25%" }}>
          <SellerContact />
          <Divider />
        </div>
      </div>
    </>
  );
}
