import {
  HeartFilled,
  LogoutOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";

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
        <a
          onClick={(e) => e.preventDefault()}
          style={{
            position: "relative",
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: "auto",
            alignItems: "center",
            padding: "0 12px",
            cursor: "pointer",
          }}
        >
          Hi, Yuchi
        </a>
      </Dropdown>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[1]}
        items={rightMenus}
      />
    </>
  );
};
