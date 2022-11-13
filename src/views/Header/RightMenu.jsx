import {
  HeartFilled,
  LogoutOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import "./Header.css";

const rightMenus = [
  {
    key: "favorite",
    icon: <HeartFilled />,
  },
  {
    key: "message",
    icon: <MessageOutlined />,
  },
];

const userMenus = (
  <Menu
    items={[
      {
        key: "personal",
        label: "profile",
        icon: <UserOutlined />,
      },
      {
        key: "setting",
        label: "設定",
        icon: <SettingOutlined />,
      },
      {
        key: "logout",
        label: "登出",
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

export const RightMenu = () => {
  return (
    <>
      <Dropdown overlay={userMenus}>
        <a onClick={(e) => e.preventDefault()} className="right-menu-dropdown">
          Hi, Yuchi
        </a>
      </Dropdown>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[1]}
        items={rightMenus}
        style={{
          height: "inherit",
          display: "flex",
          alignItems: "center",
        }}
      />
    </>
  );
};
