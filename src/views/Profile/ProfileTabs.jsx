import React from "react";
import { Tabs } from "antd";

function ProfileTabs({ profileData }) {
  return (
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
        <Tabs.TabPane tab={profileData.tabs[0]} key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab={profileData.tabs[1]} key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab={profileData.tabs[2]} key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
        <Tabs.TabPane tab={profileData.tabs[3]} key="4">
          Content of Tab Pane 4
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}


export default ProfileTabs;
