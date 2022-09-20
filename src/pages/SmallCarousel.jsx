import { Carousel } from 'antd'
import React from 'react'

export const SamllCarousel = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  const contentStyle = {
    height: '80px',
    color: '#fff',
    lineHeight: '80px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <Carousel afterChange={onChange} {...settings}>
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
  )
}
