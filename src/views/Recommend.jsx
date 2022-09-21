import { ObjectCard } from '../components/ObjectCard'
import { data } from '../assets/data'

import { List } from 'antd'

export const Recommend = () => {
  return (
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
  )
}
