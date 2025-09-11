import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { mainContext, type MainProvierProps } from "../../context/MainProvider"
import CardItem from "../../components/card-item/CardItem"

export default function CardList() {
  const { linkParam } = useParams()

  // ~ Die Variable aus dem mainContext bzw. MainProvider kann durch die Methode "useContext" genutzt werden.
  const { items, setLink } = useContext(mainContext) as MainProvierProps

  console.log(items)

  useEffect(() => {
    setLink(linkParam)
  }, [linkParam]) // eslint-disable-line react-hooks/exhaustive-deps

  // console.log(linkParam)

  return (
    <div>
      <h2>{linkParam?.toUpperCase()} Page</h2>
      <div>
        {items.map((item, index: number) => {
          return (
            <div key={index}>
              <CardItem item={item} link={linkParam || ""} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
