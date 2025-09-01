import { useState } from "react"
// import Example from "../../components/example/Example"
import type { Product } from "../../interfaces/Product"
import Shop from "../../components/shop/Shop"
import Header from "../../components/header/Header"

export default function Home() {
  const [warenkorb, setWarenkorb] = useState<Product[]>([])

  console.log(warenkorb)

  return (
    <div>
      <Header warenkorb={warenkorb} setWarenkorb={setWarenkorb} />
      {/* <Example /> */}
      {/* Hier reichen wir getter und setter weiter als props. */}
      <Shop warenkorb={warenkorb} setWarenkorb={setWarenkorb} />
    </div>
  )
}
