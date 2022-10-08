import { HeartTwoTone, MoreOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";

export const ObjectCard = (props) => (
  <Card style={{ width: props.width }} bodyStyle={{ padding: 5 }}>
    <div
      style={{
        paddingLeft: "5px",
        paddingTop: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <div>
        <div style={{ fontSize: "5px" }}>{props.id}</div>
        <div style={{ color: "#999" }}>{props.time}</div>
      </div>
    </div>
    <div>
      <img
        style={{
          aspectRatio: "1/1",
          display: "block",
          borderRadius: "5px",
        }}
        alt="example"
        width="100%"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </div>
    <div>
      <h5>{props.title}</h5>
      <h6>NT${props.money}</h6>
      <p style={{ color: "gray" }}>{props.state}</p>
    </div>
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
    >
      <HeartTwoTone />
      <MoreOutlined />
    </div>
  </Card>
);
