import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Space, Typography } from "antd";
import React from "react";

const menu = () => {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  return (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "商品",
          key: "product",
        },
        {
          label: "使用者",
          key: "user",
        },
      ]}
    />
  );
};

export const HeaderSearch = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "stretch",
        justifyContent: "space-between",
        padding: "4px 64px",
        minHeight: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexGrow: "row nowrap",
          alignItems: "center",
        }}
      >
        <div>
          <Typography.Title
            level={3}
            style={{ width: "168px", height: "32px", margin: 0 }}
          >
            HSIPLSELL
          </Typography.Title>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            position: "relative",
            display: "flex",
            flex: 1,
            margin: "0px 48px",
          }}
        >
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                商品
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Input.Search
            placeholder="搜尋商品或用戶"
            allowClear
            onSearch={onSearch}
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button>
          <Space>出售</Space>
        </Button>
      </div>
    </div>
  );
};
