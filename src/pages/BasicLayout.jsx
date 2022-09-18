import { HeaderMenu, HeaderSearch } from "@/views/Header";
import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export const BasicLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "#F2F2F7" }}>
        <HeaderMenu />
      </Header>
      <HeaderSearch />
      <Layout hasSider={true}>
        <Layout>
          <Content>
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "center",
              background: "#222222",
              height: "40px",
              padding: 0,
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
    </Layout>
  );
};
