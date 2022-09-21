import React from "react";
import { Tabs } from 'antd';
const items = [
  { label: 'Tab 1', key: 'item-1', children: 'Content 1' }, // remember to pass the key prop
  { label: 'Tab 2', key: 'item-2', children: 'Content 2' },
];
export default function PageB() {
  return <Tabs>
  <Tabs.TabPane tab="Tab 1" key="item-1">
    Content 1
  </Tabs.TabPane>
  <Tabs.TabPane tab="Tab 2" key="item-2">
    Content 2
  </Tabs.TabPane>
</Tabs>;
}
