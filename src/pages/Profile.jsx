import React from "react";
import { Avatar, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import ProfileTabs from "@/views/Profile/ProfileTabs";
import Information from "@/views/Profile/Information";
import Border from "../views/Profile/Border";
const { Text } = Typography;

const profileData = {
  name: "Tsung-Han Yang",
  id: "@e102777tw79868",
  ratings: "No ratings yet",
  city: "台北市 (Taipei)",
  join: "Joined today",
  tabs: ["Listing", "Reviews", "Coins", "Balance"],
};



export default function Profile() {
  return (
    <div style={{ display: "relative" }}>
      <Border/>
      <ProfileTabs profileData={profileData}/>
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
          <Information profileData={profileData}/>
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
