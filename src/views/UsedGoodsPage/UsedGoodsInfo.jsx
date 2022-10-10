import { BookOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";

export const UsedGoodsInfo = () => {
  return (
    <div>
      <Typography.Paragraph>高鐵票 票根</Typography.Paragraph>
      <Typography.Paragraph>NT$200</Typography.Paragraph>
      <div style={{ display: "flex" }}>
        <Typography.Paragraph style={{ width: "33%" }}>
          <BookOutlined />
          二手
        </Typography.Paragraph>
        <Typography.Paragraph style={{ width: "33%" }}>
          <EnvironmentOutlined />
          台北市 (Taipei)
        </Typography.Paragraph>
      </div>
    </div>
  );
};
