import type React from "react"
import type { Product } from "../../interfaces/Product"
import { useEffect, useState } from "react"
import Loader from "../loader/Loader"
import ProductItem from "../productItem/ProductItem"
import "./Shop.css"

interface ShopProps {
  warenkorb: Product[]
  setWarenkorb: React.Dispatch<React.SetStateAction<Product[]>>
}

export default function Shop(props: ShopProps) {
  const [megaData, setMegaData] = useState<null | Product[]>([])

  useEffect(() => {
    // Function zum Daten fetchen
    // Der Vorteil hier ist, die Daten werden nun einmal gefetcht beim ersten Rendern der Component

    // % async darf nicht vor der ersten Callbackfunction in useEffect geschrieben werden, dafür brauchen wir eine zusätzliche Callbackfunction.

    const fetchData = async (): Promise<void> => {
      const resp: Response = await fetch("https://fakestoreapi.com/products")
      const respInJson: Product[] = await resp.json()
      // console.log(respInJson)
      setMegaData(respInJson)
    }

    fetchData()
  }, [])

  // console.log(megaData)

  return (
    <div>
      <h2>Shop</h2>
      {megaData ? (
        <>
          <div className="product-container">
            {megaData.map((itemObject: Product) => {
              return (
                <div key={itemObject.id}>
                  <h4>Product</h4>
                  <ProductItem itemObject={itemObject} warenkorb={props.warenkorb} setWarenkorb={props.setWarenkorb} />
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}
