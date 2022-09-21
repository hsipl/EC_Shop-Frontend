import { ObjectCard } from '../components/ObjectCard'
import { data } from '../assets/data'

import { Carousel } from 'antd'
import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useRef } from 'react'

export const DailyPicks = () => {
  const ref = useRef()
  return (
    <div style={{ display: 'flex ', flexDirection: 'row' ,justifyContent:'center' ,alignItems:'center',}}>
      <LeftOutlined
        style={{ fontSize: '32px' }}
        onClick={() => {
          ref.current.prev()
        }}
      />
      <Carousel dots={false} draggable slidesToShow={4} ref={ref} style={{width:1000}}>
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
      </Carousel>
      <RightOutlined
        style={{ fontSize: '32px' }}
        onClick={() => {
          ref.current.next()
        }}
      />
    </div>
  )
}
