import { ObjectCard } from './ObjectCard'
import { BigCarousel } from './BigCarousel'
import { SamllCarousel } from './SmallCarousel'
import { data } from './data'

import { List } from 'antd'

export default function PageA() {
  return (
    <div>
      <BigCarousel />
      <h2>探索Carousell</h2>
      <SamllCarousel />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <ObjectCard />
          </List.Item>
        )}
      />
    </div>
  )
}
