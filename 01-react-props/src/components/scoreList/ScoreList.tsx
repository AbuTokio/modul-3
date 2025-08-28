import { scoresArray } from "../../data/scores"
import ScoreItem from "../scoreItem/ScoreItem"

export default function ScoreList() {
  return (
    <>
      {/* Wenn wir mit map array arbeiten wollen, soll jedem Component ein props "key" mitgegeben werden, der den Eintrag identifiziert. Das kann eine ID sein oder in dem Fall index von unserem Array. */}
      <section>
        {scoresArray.map((score, index) => {
          return (
            <div key={index}>
              <ScoreItem name={score.name} points={score.points} icon={score.icon} />
            </div>
          )
        })}
      </section>
    </>
  )
}
