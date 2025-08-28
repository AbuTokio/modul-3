interface scoreItemProps {
  name: string
  points: number
  icon: string
}

export default function ScoreItem({ name, points, icon }: scoreItemProps) {
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <span>{points} Points</span>
        <div>Icon: {icon}</div>
      </div>
    </>
  )
}
