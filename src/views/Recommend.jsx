import { ObjectCard } from "../components/ObjectCard";
import { data } from "../assets/data";

import { List } from "antd";

export const Recommend = () => {
  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <ObjectCard />
        </List.Item>
      )}
    />
  );
};
