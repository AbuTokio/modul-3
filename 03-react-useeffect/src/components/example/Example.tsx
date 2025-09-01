// ~ Was ist UseEffect?
// ? Ein useEffect ist dafür da einen Seiteneffekt zu schreiben. D.h. es wird immer ausgeführt, wenn sich ein bestimmter Wert ändert. In dem Fall wird die Komponente neu gerendert.
// ? Es gibt keine Höchstgrenze an dependencies, man kann "unendlich" viele hinzufügen.
// ? Es muss auch nichts zwangsweise ein State sein. Wir können z.B. auch IDs von der URL extrahieren, was wir als dependency hinzufügen können.
// ? ❌ Was nicht erlaubt ist: setter als dependency (z.B. setCounter) oder innerhalb der Funktion verwenden.

import { useEffect, useState } from "react"

// ~ Wie ist die Schreibweise?
// ? useEffect(callbackfunction, dependencies)
// ? useEffect(() => {}, [dependencies])

// useEffect(() => {}, [])

export default function Example() {
  const [counter, setCounter] = useState<number>(0)
  const [slider, setSlider] = useState<string>("0")

  const changeCounter = () => setCounter(counter + 1)

  const changeSlider = (event: React.ChangeEvent<HTMLInputElement>) => setSlider(event.target.value)

  useEffect(() => {
    console.log(counter)
    console.log(slider)
  }, [counter, slider])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={changeCounter}>+1</button>

      <p>Slider: {slider}</p>
      <input type="range" name="" id="" value={slider} onChange={changeSlider} />
    </div>
  )
}
