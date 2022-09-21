import { BigCarousel } from '../views/BigCarousel'
import { SamllCarousel } from '../views/SmallCarousel'
import { Recommend } from '../views/Recommend'
import { DailyPicks } from '../views/DailyPicks'
import Column from 'antd/lib/table/Column'

export default function PageA() {
  return (
    <div>
      <div style={{ display: 'flexBox', flexDirection: 'row' }}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <BigCarousel />
      <h2>探索Carousell</h2>
      <SamllCarousel />
      <h2>你的每日精選</h2>
      <DailyPicks />
      <h2>為你推薦</h2>
      <Recommend />
    </div>
  )
}
