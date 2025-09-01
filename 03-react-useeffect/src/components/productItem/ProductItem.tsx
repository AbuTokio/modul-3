import type React from "react"
import type { Product } from "../../interfaces/Product"
import "./ProductItem.css"

interface ProductItemProps {
  itemObject: Product
  warenkorb: Product[]
  setWarenkorb: React.Dispatch<React.SetStateAction<Product[]>>
}

export default function ProductItem({ itemObject, warenkorb, setWarenkorb }: ProductItemProps) {
  const addToCartFunction = (item: Product) => {
    console.log(item)
    if (!item) return
    // Der Warenkorb darf nicht überschrieben werden, sondern das einzelne Produkt soll jedes mal hinzugefügt werden.
    setWarenkorb([...warenkorb, item])
  }

  return (
    <div className="product-item">
      <h5>Product Item</h5>
      <h6>{itemObject.title}</h6>
      <p>Price: {itemObject.price}</p>
      <p>Category: {itemObject.category}</p>
      <img src={itemObject.image} alt={itemObject.title} />
      <button
        onClick={() => {
          addToCartFunction(itemObject)
        }}>
        Add to Cart
      </button>
    </div>
  )
}
