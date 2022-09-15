import { ObjectCard } from './ObjectCard'

export default function PageA() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,180px)',
        padding: 10,
      }}>
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
    </div>
  )
}
