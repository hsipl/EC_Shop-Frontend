import { HeartTwoTone, MoreOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import React from 'react'
import './ObjectCard.css'
const { Meta } = Card
export const ObjectCard = () => (
  <Card style={{ width: 180, padding: 20 }} bodyStyle={{ padding: 20 }}>
    <div
      style={{
        paddingLeft: '5px',
        paddingTop: '5px',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <div>
        <div style={{ fontSize: '5px' }}>ID</div>
        <div style={{ color: '#999' }}>Time</div>
      </div>
    </div>
    <div>
      <img
        style={{
          aspectRatio: '1/1',
          display: 'block',
        }}
        alt="example"
        width="100%"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </div>
    <div className="custom-card">
      <h5>NAME</h5>
      <h6>NT$200</h6>
      <p>全新</p>
    </div>
    <div
      style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <HeartTwoTone />
      <MoreOutlined />
    </div>
  </Card>
)
