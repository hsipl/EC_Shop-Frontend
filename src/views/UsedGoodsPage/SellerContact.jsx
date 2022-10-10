import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, InputNumber, Rate } from "antd";
import React from "react";

export const SellerContact = () => {
  return (
    <div
      style={{
        padding: "20px 24px",
        borderRadius: "8px",
        boxShadow: "0 3px 10px 0 rgb(44 44 45 / 7%)",
      }}
    >
      <div style={{ marginBottom: "20px", display: "flex" }}>
        <Avatar size={40} icon={<UserOutlined />} />
        <div>
          <div
            style={{
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            @carlchen1224
          </div>
          <div style={{ display: "flex", height: "20px" }}>
            <div>2.5</div>
            <Rate
              disabled
              defaultValue={2.5}
              allowHalf
              style={{
                display: "flex",
                fontSize: "15px",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            />
            <div>(1 review)</div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <InputNumber
            prefix="$"
            defaultValue={1224}
            min="0"
            style={{ width: "60%", margin: "0px" }}
          />
          <Button style={{ width: "40%" }}>直接購買</Button>
        </div>
        <Button style={{ display: "block", width: "100%" }}>對話</Button>
      </div>
    </div>
  );
};
