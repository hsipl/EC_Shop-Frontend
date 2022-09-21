import { Carousel } from 'antd'
import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useRef } from 'react'

export const SamllCarousel = () => {
  const contentStyle = {
    height: '80px',
    color: '#fff',
    lineHeight: '80px',
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
      <Carousel dots={false} draggable slidesToShow={4} ref={ref} style={{width:1000}}>
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
        <div>
          <h3 style={contentStyle}>5</h3>
        </div>
        <div>
          <h3 style={contentStyle}>6</h3>
        </div>
        <div>
          <h3 style={contentStyle}>7</h3>
        </div>
        <div>
          <h3 style={contentStyle}>8</h3>
        </div>
        <div>
          <h3 style={contentStyle}>9</h3>
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
