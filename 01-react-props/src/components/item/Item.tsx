interface ItemProps {
  title: string
  description: string
  bg?: string
}

// Wenn ich Daten von Eltern zum Kind weitergeben möchte, muss ich meinen Component zu einer React.FC Component typisieren. So weiß React, dass die Daten ankommen. Zudem muss ich einen Interface erstellen.

// Über das Wort props kann ich dann auf die Daten zugreifen.

const Item: React.FC<ItemProps> = (props) => {
  // console.log("title: ", props.title)
  // console.log("description: ", props.description)

  return (
    <>
      <div className="item" style={{ backgroundColor: `${props.bg}` }}>
        {/* die {} benötigen wir, damit wir JS/TS in HTML benutzen können. innerHTML, etc. gibt es nicht mehr in React. */}
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default Item
