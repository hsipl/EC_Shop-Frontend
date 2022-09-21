import { Carousel } from 'antd'
import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useRef } from 'react'

export const BigCarousel = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
  const ref = useRef()
  return (
    <div style={{ display: 'flex ', flexDirection: 'row' ,justifyContent:'center' ,alignItems:'center'}}>
      <LeftOutlined
        style={{ fontSize: '32px' }}
        onClick={() => {
          ref.current.prev()
        }}
      />
      <Carousel dots={false} draggable slidesToShow={2} ref={ref} style={{width:1000}}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
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
