import React from "react";
import { Avatar, Tabs, Card } from "antd";
import { UserOutlined, StarFilled, RightOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
const { Text } = Typography;

const profileData = {
  name: "Tsung-Han Yang",
  id: "@e102777tw79868",
  ratings: "No ratings yet",
  city: "台北市 (Taipei)",
  join: "Joined today",
  buttons: ["Listing", "Reviews", "Coins", "Balance"],
};

let buttons = [];
profileData.buttons.forEach((element) => {
  buttons.push(<Button type="text">{element}</Button>);
});

export default function Profile() {
  return (
    <div style={{ display: "relative" }}>
      <div
        style={{
          backgroundColor: "ff2636",
          backgroundImage:
            "url(https://mweb-cdn.karousell.com/build/profile-bg-1hcJPlrNW6.jpg)",
          backgroundSize: "50%",
          backgroundRepeat: "repeat",
          height: "128px",
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          backgroundColor: "1px solid #f0f1f1",
          backGround: "#fff",
          height: "64px",
          width: "100%",
          alignItems: "center",
          marginTop: "7px",
        }}
      >
        <div
          style={{
            width: "324px",
          }}
        />
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={profileData.buttons[0]} key="1">
            Content of Tab Pane 1
          </Tabs.TabPane>
          <Tabs.TabPane tab={profileData.buttons[1]} key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab={profileData.buttons[2]} key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
          <Tabs.TabPane tab={profileData.buttons[3]} key="4">
            Content of Tab Pane 4
          </Tabs.TabPane>
        </Tabs>
      </div>
      <div
        style={{
          display: "relative",
          width: "324px",
          marginTop: "-112px",
          flex: " 0 0 324px",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "4px" }}
        >
          <Avatar size={152} icon={<UserOutlined />} />
          <Text
            level={2}
            style={{ color: "#2C2C2D", fontSize: "30px", fontWeight: "normal" }}
          >
            {profileData.name}
          </Text>
          <Text style={{ fontSize: "16px" }}>{profileData.id}</Text>

          <div
            style={{
              size: "20px",
              color: "#57585A",
              margin: "0px 0px 0px -12px",
              padding: "8px 12px",
            }}
          >
            <Button
              style={{
                padding: "0",
                margin: "0",
                border: "none",
                background: "none",
              }}
            >
              <StarFilled
                style={{
                  size: "20px",
                  color: "#57585A",
                  margin: "0px 8px 0px 0px",
                }}
              />
              <Text
                style={{
                  fontSize: "16px",
                  color: "#57585A",
                  margin: "0px 8px 5px 4px",
                }}
              >
                {profileData.ratings}
              </Text>
              <RightOutlined />
            </Button>
          </div>
          <Text
            style={{
              fontSize: "14px",
              color: "#57585A",
            }}
          >
            {profileData.city} ∙ {profileData.join}
          </Text>
          <Text
            style={{
              padding: "10px 5px 5px 0px",
              fontSize: "14px",
              color: "#57585A",
            }}
          >
            Verified
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#57585A",
              marginTop: "24px"
            }}
          >
            0 Followers  0 Following
          </Text>
          <Card style={{
              fontSize: "14px",
              color: "#57585A",
              marginTop: "36px"
            }}>
            <p>Card content</p>
            <p>Card content</p>
            <Button>123</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
