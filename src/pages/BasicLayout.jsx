import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;

const menus = [
  {
    key: "subnav1",
    label: "subnav1",
    icon: <UserOutlined />,
    children: [
      { key: "option1", label: "option1" },
      { key: "option2", label: "option2" },
    ],
  },
  { key: "subnav2", label: "subnav2", icon: <LaptopOutlined /> },
];

export const BasicLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "#F2F2F7" }}>Header</Header>
      <Layout hasSider={true}>
        <Sider>
          <Menu mode="inline" theme="dark" items={menus} />
        </Sider>
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
