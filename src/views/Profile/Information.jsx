import { StarFilled, RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
const { Text } = Typography;
function Information({ profileData }) {
  return (
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
      <div style={{ display: "flex", flexDirection: "column" }}>
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
            marginTop: "24px",
          }}
        >
          0 Followers 0 Following
        </Text>
      </div>
    </div>
  );
}

export default Information;
