import { useState } from "react"

export default function CounterComponent() {
  // + Was ist ein Hook in React?
  // Ein Hook ist eine Funktion, die uns bestimmte Funktionen von React gibt: z.B. State (Daten Merken oder speichern), Effekte (etwas ausführen, wenn sich etwas ändert) oder Refs (Sachen langfristig speichern, ohne neu zu rendern).

  // ❌ const pizzaVariante = "funghi"
  // Stattdessen => UseState

  // ~ UseState

  const [counter, setCounter] = useState<number>(0)

  // Der erste Wert "counter" ist wie der getter wo ich mir die Daten holen kann.
  // Der zweite Wert "setCounter" ist wie der setter, sollte immer mit set beginnen und ist die Funktion mit der wir den Wert ändern können.

  // % Entweder Funktionen auslagern und dann in JSX/TSX Bereich aufrufen ...

  const plus = () => {
    setCounter(counter + 1)
  }

  return (
    // Ab hier ist der JSX / TSX Bereich.
    <>
      <p>Counter: {counter}</p>
      <button onClick={plus}>+1</button>
      {/* ... Oder die Funktion direkt in der onClick definieren. */}
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}>
        -1
      </button>
      <div></div>
    </>
  )
}
