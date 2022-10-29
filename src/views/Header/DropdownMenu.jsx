import { setMenuKey } from "@/store/header";
import { Space, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";

export const DropdownMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="header-dropdown-menu"
      onMouseLeave={() => dispatch(setMenuKey(-1))}
    >
      <div style={{ height: "100%", display: "flex", overflow: "hidden" }}>
        <div style={{ width: "20%", lineHeight: "30px" }}>
          <Typography.Title level={5}>他的時尚</Typography.Title>
          <Space direction="vertical">
            <Typography.Text>包包</Typography.Text>
            <Typography.Text>鞋子</Typography.Text>
            <Typography.Text>上衣</Typography.Text>
          </Space>
        </div>
        <div style={{ width: "20%", lineHeight: "30px" }}>
          <Typography.Title level={5}>她的時尚</Typography.Title>
          <Space direction="vertical">
            <Typography.Text>包包</Typography.Text>
            <Typography.Text>鞋子</Typography.Text>
            <Typography.Text>上衣</Typography.Text>
          </Space>
        </div>
        <Space
          direction="vertical"
          style={{ width: "20%", lineHeight: "30px" }}
        >
          <Typography.Title level={5}>美妝保養</Typography.Title>
          <Typography.Text>化妝品</Typography.Text>
          <Typography.Text>香水</Typography.Text>
          <Typography.Text>美髮</Typography.Text>
          <Typography.Text>身體清潔保養</Typography.Text>
          <Typography.Text>美甲</Typography.Text>
        </Space>
        <div style={{ width: "20%", lineHeight: "30px" }}>
          <Typography.Title level={5}>名牌精品</Typography.Title>
          <Space direction="vertical">
            <Typography.Text>精品包包</Typography.Text>
            <Typography.Text>精品衣服</Typography.Text>
            <Typography.Text>精品配件</Typography.Text>
          </Space>
        </div>
        <div style={{ width: "20%", lineHeight: "30px" }}>123</div>
      </div>
    </div>
  );
};
