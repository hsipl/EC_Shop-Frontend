import { Menu } from "antd";
import React from "react";

const leftMenus = [
  {
    key: 1,
    label: "流行時尚",
  },
  {
    key: 2,
    label: "品味家居",
  },
  {
    key: 3,
    label: "其他好物",
  },
  {
    key: 4,
    label: "3C電子",
  },
  {
    key: 5,
    label: "運動休閒",
  },
  {
    key: 6,
    label: "居家防疫專區",
  },
];

export const LeftMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={leftMenus}
      style={{ width: "100%" }}
    />
  );
};
