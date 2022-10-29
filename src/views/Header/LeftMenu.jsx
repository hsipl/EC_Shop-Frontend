import { setMenuKey } from "@/store/header";
import { Menu } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";

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
  const dispatch = useDispatch();
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={leftMenus}
      className="left-menu"
      onClick={({ key }) => dispatch(setMenuKey(key))}
    />
  );
};
