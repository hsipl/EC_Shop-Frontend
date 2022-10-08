import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Space, Typography } from "antd";
import React from "react";
import "./Header.css";

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
    <div className="header-search">
      <div className="header-search-logo">
        <div>
          <Typography.Title
            level={3}
            style={{ width: "168px", height: "32px", margin: 0 }}
          >
            HSIPLSELL
          </Typography.Title>
        </div>
        <div className="header-search-product-dropdown">
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
      <div className="header-search-sell-button">
        <Button>
          <Space>出售</Space>
        </Button>
      </div>
    </div>
  );
};
