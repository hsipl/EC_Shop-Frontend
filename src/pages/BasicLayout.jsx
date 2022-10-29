import { DropdownMenu, HeaderMenu, HeaderSearch } from "@/views/Header";
import { Layout, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export const BasicLayout = () => {
  const { menuKey } = useSelector((state) => state.header);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div style={{ position: "fixed", width: "100%" }}>
        <Header style={{ color: "#F2F2F7", padding: 0, height: "40px" }}>
          <HeaderMenu />
          {menuKey > 0 && <DropdownMenu />}
        </Header>
        <HeaderSearch />
      </div>

      <Layout style={{ paddingTop: "128px" }}>
        <Content
          style={{
            paddingLeft: "calc((100vw - 1440px)/2 + 64px)",
            paddingRight: "calc((100vw - 1440px)/2 + 64px)",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            background: "#222222",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "#AEAEB2",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Typography>
        </Footer>
      </Layout>
    </Layout>
  );
};
