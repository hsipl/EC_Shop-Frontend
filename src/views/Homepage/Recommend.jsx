import { ObjectCard } from "@/components/ObjectCard";
import { data } from "@/assets/homepageData";

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
          <ObjectCard
            key={item.id}
            title={item.title}
            id={item.id}
            time={item.time}
            money={item.money}
            state={item.state}
          />
        </List.Item>
      )}
    />
  );
};
